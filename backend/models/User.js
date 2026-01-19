const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    gender: { type: String, default: "Rather not say" },
    birthday: { type: Date },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    isComplete: {
      type: String,
      enum: ["PENDING", "COMPLETE", "VERIFIED"],
      default: "PENDING",
    },
    DP: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
