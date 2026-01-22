const express = require("express");
const session = require("express-session");
const app = express();
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const path = require("path");

const PORT = 4000;
const url = "mongodb://127.0.0.1:27017";
let db;

app.use(express.static("dp"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "dp/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const options = {
  key: fs.readFileSync(process.env.SSL_KEY),
  cert: fs.readFileSync(process.env.SSL_CERT),
};

async function connectDB() {
  await mongoose.connect(url + "/facebook");
  console.log("connected");
}

connectDB().catch(console.error);

app.use(
  session({
    name: "sid", // cookie name (optional)
    secret: "super-secret-key", // 🔐 must be hidden in env
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true, // true ONLY in HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  }),
);

app.use(
  cors({
    origin: process.env.API,
    credentials: true,
  }),
);
app.use(express.json());

app.post("/send", async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ STATUS: "EMAIL_EXIST" });
    }
    const newUser = new User({ ...rest, password: hashedPassword, email });
    await newUser.save();
    res.status(201).json({ status: "SUCCESS" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "FAILED" });
  }
});

app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: "NOT_EXIST" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: "INCORRECT_PASSWORD" });
    }

    if (user.isComplete === "PENDING") {
      const { _id, firstname, lastname } = user;
      req.session.userId = _id;
      console.log(req.session.userId);
      return res.status(202).json({ status: "PENDING", firstname, lastname });
    }

    let { _id, firstname, lastname, DP } = user;
    res
      .status(200)
      .json({ status: "SUCCESS", firstname, lastname, id: _id, DP });
    console.log(DP);
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "SERVER_ERROR" });
  }
});

app.post("/uploadDp", (req, res) => {
  upload.single("dp")(req, res, async (err) => {
    if (err) return res.send("UPLOAD FAILED");
    console.log("uploaded");
    console.log(req.session.userId);

    const user = await User.findById(req.session.userId);
    if (user) {
      user.isComplete = "COMPLETE";
      user.DP = req.file.originalname;
      user.save();
    }

    res.send("SUCCESS");
  });
});

https.createServer(options, app).listen(PORT, () => {
  console.log("Running in port 4000");
});
