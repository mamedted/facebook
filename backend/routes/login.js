const express = require("express");
const User = require("../models/User");
const routes = express.Router();
const bcrypt = require("bcryptjs");

routes.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: "NOT_EXIST" });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    if (password !== user.password) {
      return res.status(401).json({ status: "INCORRECT_PASSWORD" });
    }

    if (user.isComplete === "PENDING") {
      const { _id, firstname, lastname } = user;
      req.session.userId = _id;
      console.log(req.session.userId);
      return res.status(202).json({ status: "PENDING", firstname, lastname });
    }
    let { _id, firstname, lastname, DP } = user;
    req.session.userId = _id;
    res
      .status(200)
      .json({ status: "SUCCESS", firstname, lastname, id: _id, DP });
    console.log(`${firstname + " " + lastname} logs in`);
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "SERVER_ERROR" });
  }
});

module.exports = routes;
