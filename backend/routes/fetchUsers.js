const express = require("express");
const User = require("../models/User");
const routes = express.Router();

routes.post("/fetchUsers", async (req, res) => {
  try {
    let Users = await User.find();
    if (!Users) return res.status(404).json({ status: "EMPTY_POST" });
    res.status(200).json({ Users });
  } catch (e) {
    console.log(e);
  }
});

module.exports = routes;
