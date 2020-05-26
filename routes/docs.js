const router = require("express").Router();
let Document = require("../models/document.model");

router.route("/").get((req, res) => {
  Document.find()
    .then((documents) => res.json(documents))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const text = req.body.text;
  if (Document.exists({ name: name })) {
    Document.findOneAndUpdate({ name: name }, { text: text })
      .then(() => res.json("Document updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  } else {
    const newDocument = new Document({
      name,
      text,
    });

    newDocument.save().catch((err) => res.status(400).json("Error: " + err));
  }
});

router.route("/:name").delete((req, res) => {
  if (Document.exists({ name: req.params.name })) {
    Document.deleteOne({ name: req.params.name })
      .then(() => res.json("doc deleted."))
      .catch((err) => res.status(400).json("Error: " + err));
  }
});

module.exports = router;
