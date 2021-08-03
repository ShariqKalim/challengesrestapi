const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  topic: {
    type: String,
    require: true,
    trim: true,
  },
  main: {
    type: String,
    require: true,
    trim: true,
  },
  link: {
    type: String,
    require: true,
    trim: true,
  },
  date: {
    type: String,
    require: true,
    trim: true,
  },
  ratings: {
    type: String,
    require: true,
    trim: true,
  },
  logoid: {
    type: String,
    require: true,
    trim: true,
  },
});

const challenges = new mongoose.model("Challenges", challengeSchema);

module.exports = challenges;
