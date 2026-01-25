const express = require("express");
const Stories = require("../models/Stories");
const routes = express.Router();

routes.post("/fetchStories", async (req, res) => {
  try {
    let stories = await Stories.find()
      .populate("author", "firstname lastname DP")
      .sort({ createdAt: -1 });

    if (!stories) return res.status(404).json({ status: "EMPTY_STORIES" });

    res.status(200).json({ stories });
  } catch (e) {
    console.log(e);
  }
});

module.exports = routes;
