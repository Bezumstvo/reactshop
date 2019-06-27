const express = require("express");
const router = express.Router();
const usersService = require("./users.service");

// routes
router.post("/authenticate", authenticate);
router.post("/registration", registration);

module.exports = router;

function authenticate(req, res, next) {
  usersService
    .authenticate(req.body)
    .then(user =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Email или пароль введены не верно" })
    )
    .catch(err => next(err));
}
function registration(req, res, next) {
  usersService
    .registration(req.body)
    .then(user =>
      user
        ? res.json(user)
        : res.status(400).json({
            message:
              "Вы не заполнили поле пароль или Email уже зарегистрирован. Восстановить пароль?"
          })
    )
    .catch(err => next(err));
}
