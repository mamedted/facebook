const mongoose = require("mongoose");
const storySchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const Story = mongoose.model("Story", storySchema);

module.exports = Story;
