const express = require("express");
const session = require("express-session");
const app = express();
const https = require("https");
const fs = require("fs");
const cors = require("cors");

const mongoose = require("mongoose");

const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const setdpRoutes = require("./routes/uploaddp");
const postRoutes = require("./routes/post");
const fetchPostsRoutes = require("./routes/fetchPost");
const uploadStory = require("./routes/uploadstory");
const fetchStories = require("./routes/fetchStories");
const fetchUsers = require("./routes/fetchUsers");

require("dotenv").config();

const PORT = 4000;
const url = "mongodb://127.0.0.1:27017";

app.use(express.static("dp"));
app.use(express.static("media_stories"));
app.use(express.static("media_posts"));

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
  })
);

app.use(
  cors({
    origin: process.env.API,
    credentials: true,
  })
);
app.use(express.json());

app.use("/", signupRoutes);
app.use("/", loginRoutes);
app.use("/", setdpRoutes);
app.use("/", postRoutes);
app.use("/", fetchPostsRoutes);
app.use("/", uploadStory);
app.use("/", fetchStories);
app.use("/", fetchUsers);

app.post("/tester", (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "SUCCESS" });
});

https.createServer(options, app).listen(PORT, () => {
  console.log("Running in port 4000");
});
