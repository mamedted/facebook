const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();
const bcrypt = require("bcryptjs");

const PORT = 4000;
const url = "mongodb://127.0.0.1:27017";
let db;

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

app.use(cors());
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
      return res.status(202).json({ status: "PENDING" });
    }

    let { _id, firstname, lastname } = user;
    res.status(200).json({ status: "SUCCESS", firstname, lastname, id: _id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "SERVER_ERROR" });
  }
});

app.post("/uploadDp", (req, res) => {
  upload.single("dp")(req, res, (err) => {
    if (err) return res.send("UPLOAD FAILED");
    res.send("SUCCESS");
  });
});

https.createServer(options, app).listen(PORT, () => {
  console.log("Running in port 4000");
});
