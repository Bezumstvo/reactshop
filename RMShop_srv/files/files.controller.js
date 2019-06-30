const express = require("express");
const router = express.Router();
const filesService = require("./files.service");

// routes
router.post("/upload", upload);

module.exports = router;

function upload(req, res, next) {
  filesService
    .upload(req)
    .then(files => res.json(files))
    .catch(err => next(err));
}
