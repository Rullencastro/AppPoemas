const db = require("../models");
const Poem = db.poem;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.poemsAll = (req, res) => {
  Poem.find({}, (err, poems) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!poems) {
      return res.status(404).send({ message: "No poems in database." });
    }
    res.status(200).send(
      poems.map((p) => {
        return {
          title: p.title,
          content: p.content,
          url: p.url,
          poet: p.poet,
        };
      })
    );
  });
};
