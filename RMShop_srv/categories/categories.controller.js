const express = require("express");
const router = express.Router();
const categoriesService = require("./categories.service");

// routes
router.get("/", getAll);
router.post("/add", add);
router.post("/update", update);
router.post("/remove", remove);

module.exports = router;

function getAll(req, res, next) {
  categoriesService
    .getAll(req.headers.authorization)
    .then(categories => res.json(categories))
    .catch(err => next(err));
}

function add(req, res, next) {
  categoriesService
    .add(req)
    .then(categories => res.json(categories)) // Возвращает новый список категорий (можно заменить на возврат id)
    .catch(err => next(err));
}

function update(req, res, next) {
  categoriesService
    .update(req)
    .then(categories => res.json(categories))
    .catch(err => next(err));
}

function remove(req, res, next) {
  categoriesService
    .remove(req)
    .then(categories => res.json(categories))
    .catch(err => next(err));
}
