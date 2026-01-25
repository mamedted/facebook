const express = require("express");
const multer = require("multer");
const User = require("../models/User");
const Stories = require("../models/Stories");

const routes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "media_stories/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

routes.post("/uploadStory", upload.single("image"), (req, res) => {
  console.log(req.file.originalname);

  const newStory = new Stories({
    author: req.session.userId,
    image: req.file.originalname,
  });
  newStory.save();

  res.status(200).send({ status: "SUCCESS" });
});

module.exports = routes;
