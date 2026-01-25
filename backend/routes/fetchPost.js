const express = require("express");
const User = require("../models/User");
const Post = require("../models/Post");
const routes = express.Router();

routes.post("/fetchAllPosts", async (req, res) => {
  try {
    let allPosts = await Post.find()
      .populate("author", "firstname lastname DP")
      .sort({ createdAt: -1 });
    if (!allPosts) return res.status(404).json({ status: "EMPTY_POST" });

    setTimeout(() => {
      res.status(200).json({ allPosts });
    }, 1000);
  } catch (e) {
    console.log(e);
  }
});

module.exports = routes;
