const express = require("express");
const User = require("../models/User");
const routes = express.Router();
const bcrypt = require("bcryptjs");

routes.post("/signup", async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ STATUS: "EMAIL_EXIST" });
    }
    const newUser = new User({ ...rest, password, email });
    await newUser.save();
    res.status(201).json({ status: "SUCCESS" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "FAILED" });
  }
});

module.exports = routes;
