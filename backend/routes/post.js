const express = require("express");
const Post = require("./../models/Post");

const routes = express.Router();

routes.post("/post", async (req, res) => {
  try {
    const { postContent, selectedColor } = req.body;

    const newPost = new Post({
      author: req.session.userId,
      postContent: postContent,
      bg: selectedColor,
    });

    await newPost.save();
    res.status(200).json({ message: "SUCCESS" });
    console.log(`POST: ${postContent}`);
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: "SERVER_ERROR" });
  }
});

module.exports = routes;
