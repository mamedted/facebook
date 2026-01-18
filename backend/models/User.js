const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    gender: { type: String, default: "Rather not say" },
    birthday: { type: Date, required: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
