const mongoose = require("mongoose");

const OpenInApplinks = new mongoose.Schema({
  userId: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports =
  mongoose.models.OpenInApplinks ||
  mongoose.model("OpenInApplinks", OpenInApplinks);
