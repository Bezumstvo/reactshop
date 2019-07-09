const express = require("express");
const router = express.Router();
const productsService = require("./products.service");

// routes
router.get("/", getAll);
router.post("/id", getById);
router.post("/add", add);
router.post("/update", update);
router.post("/remove", remove);

module.exports = router;

function getAll(req, res, next) {
  productsService
    .getAll(req.headers.authorization)
    .then(products => res.json(products))
    .catch(err => next(err));
}

function getById(req, res, next) {
  productsService
    .getById(req)
    .then(product => res.json(product))
    .catch(err => next(err));
}

function add(req, res, next) {
  productsService
    .add(req)
    .then(products => res.json(products)) // Возвращает новый список категорий (можно заменить на возврат id)
    .catch(err => next(err));
}

function update(req, res, next) {
  productsService
    .update(req)
    .then(products => res.json(products))
    .catch(err => next(err));
}

function remove(req, res, next) {
  productsService
    .remove(req)
    .then(products => res.json(products))
    .catch(err => next(err));
}
