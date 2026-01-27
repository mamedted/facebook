const express = require("express");
const Post = require("./../models/Post");
const multer = require("multer");

const routes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media_posts/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

routes.post("/post", upload.array("files[]"), async (req, res) => {
  try {
    const { postContent, selectedColor } = req.body;
    const filePath = req.files.map((file) => file.originalname);
    const newPost = new Post({
      author: req.session.userId,
      postContent: postContent,
      media: filePath,
      bg: selectedColor,
    });

    await newPost.save();
    res.status(200).json({ status: "SUCCESS" });
    console.log(`POST: ${postContent}`);
    console.log("Media");

    req.files.forEach((ele) => console.log(ele.originalname));
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: "SERVER_ERROR" });
  }
});

module.exports = routes;
