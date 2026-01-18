const express = require("express");
const app = express();
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const multer = require("multer");
const { MongoClient } = require("mongodb");
require("dotenv").config();

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
  let client = await MongoClient.connect(url);
  db = client.db("facebook");
  console.log("connected");
}

connectDB();

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  if (await db.collection("users").insertOne(req.body)) {
    res.send("SUCCESS");
  }
});

app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(404).json({ status: "NOT_EXIST" });
    }
    if (user.password !== password) {
      return res.status(401).json({ status: "INCORRECT_PASSWORD" });
    }
    console.log(user);
    let { _id, firstname, lastname } = user;
    res.status(200).json({ status: "SUCCESS", firstname, lastname, id: _id });
  } catch (e) {
    console.error(e);
    res.send("Internal server error!");
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
