const mongoose = require("mongoose");

const poemSchema = new mongoose.Schema({
  title: String,
  content: String,
  url: String,
  poet: {
    name: String,
    url: String,
  },
});

const Poem = mongoose.model("Poem", poemSchema);

module.exports = Poem;
