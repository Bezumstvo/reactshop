const config = require("config.json");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const db = require("../_helpers/db.js");

var users;

module.exports = {
  registration,
  authenticate
};
async function registration({ username, password }) {
  //    if ((password>0)&&(!users.find(u => u.username === username))) { user = username }
  db.one(
    "insert into users (email, password) " + "values($1, $2) RETURNING id;",
    [username, password]
  ).then(data => {
    users = data;
  });
  if (users.id) {
    const token = jwt.sign({ sub: users.id }, config.secret);
    const { password, ...userWithoutPassword } = Object.entries(users);
    return {
      ...userWithoutPassword,
      token
    };
  }
}
async function authenticate({ username, password }) {
  var result;
  const Users = db.models.Users;
  await db.models.Users.find({ login: username, password: password }).then(
    data => {
      if (data && data[0] && data[0]._doc) {
        result = data[0]._doc;
      }
    }
  );

  if (result && result._id) {
    const token = jwt.sign(
      { sub: result._id, role: result.role },
      config.secret
    );
    const { password, ...userWithoutPassword } = result;
    console.log(result);
    return {
      ...userWithoutPassword,
      token
    };
  }
}
