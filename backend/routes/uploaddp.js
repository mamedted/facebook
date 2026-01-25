const express = require("express");
const Post = require("./../models/Post");
const User = require("../models/User");
const multer = require("multer");

const routes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "dp/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

routes.post("/uploadDp", async (req, res) => {
  upload.single("dp")(req, res, async (err) => {
    if (err) return res.send("UPLOAD FAILED");
    console.log("uploaded");
    console.log(req.session.userId);

    const user = await User.findById(req.session.userId);
    if (user) {
      user.isComplete = "COMPLETE";
      user.DP = req.file.originalname;
      await user.save();
    }

    res.status(200).json({ DP: user.DP });
  });
});

module.exports = routes;
