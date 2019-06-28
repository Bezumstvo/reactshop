const express = require("express");
const router = express.Router();
const departmentsService = require("./departments.service");

// routes
router.get("/", getAll);
router.post("/add", add);
router.post("/update", update);
router.post("/remove", remove);

module.exports = router;

function getAll(req, res, next) {
  departmentsService
    .getAll(req.headers.authorization)
    .then(departments => res.json(departments))
    .catch(err => next(err));
}

function add(req, res, next) {
  departmentsService
    .add(req)
    .then(departments => res.json(departments)) // Возвращает новый список категорий (можно заменить на возврат id)
    .catch(err => next(err));
}

function update(req, res, next) {
  departmentsService
    .update(req)
    .then(departments => res.json(departments))
    .catch(err => next(err));
}

function remove(req, res, next) {
  departmentsService
    .remove(req)
    .then(departments => res.json(departments))
    .catch(err => next(err));
}
