import express from "express";
const router = express.Router();

router.post("/send", async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ STATUS: "EMAIL_EXIST" });
    }
    const newUser = new User({ ...rest, password: hashedPassword, email });
    await newUser.save();
    res.status(201).json({ status: "SUCCESS" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "FAILED" });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: "NOT_EXIST" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: "INCORRECT_PASSWORD" });
    }

    if (user.isComplete === "PENDING") {
      const { _id, firstname, lastname } = user;
      req.session.userId = _id;
      console.log(req.session.userId);
      return res.status(202).json({ status: "PENDING", firstname, lastname });
    }

    let { _id, firstname, lastname } = user;
    res.status(200).json({ status: "SUCCESS", firstname, lastname, id: _id });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "SERVER_ERROR" });
  }
});

router.post("/uploadDp", (req, res) => {
  upload.single("dp")(req, res, async (err) => {
    if (err) return res.send("UPLOAD FAILED");
    console.log("uploaded");
    console.log(req.session.userId);

    const user = await User.findById(req.session.userId);
    if (user) {
      user.isComplete = "COMPLETE";
      user.save();
    }

    res.send("SUCCESS");
  });
});

module.exports = router;
