const config = require("config.json");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const db = require("../_helpers/db.js");

module.exports = {
  getAll,
  add,
  update,
  remove
};
async function getAll(token) {
  var result;
  const departments = db.models.Departments;
  await db.models.Departments.find().then(data => {
    result = data;
  });
  return result;
}

async function add(token) {
  var result;
  if (token) {
    var { role } = jwt.decode(token.headers.authorization.substr(7)); // substr cut "Bearer"
  }
  if (role === 1) {
    const departments = db.models.Departments;
    const new_category = new departments({
      name: token.body.name,
      description: token.body.description
    });
    await new_category.save();
    await db.models.Departments.find().then(data => {
      result = data;
    });
  }
  return result;
}

async function update(token) {
  var result;
  if (token) {
    var { role } = jwt.decode(token.headers.authorization.substr(7)); // substr cut "Bearer"
  }
  if (role === 1) {
    console.log(token.body)
    const departments = db.models.Departments;
    await db.models.Departments.find({ _id: token.body._id }).updateOne({
      name: token.body.name,
      description: token.body.description
    });
    await db.models.Departments.find().then(data => {
      result = data;
    });
  }
  return result;
}

async function remove(token) {
  var result;
  if (token) {
    var { role } = jwt.decode(token.headers.authorization.substr(7)); // substr cut "Bearer"
  }
  if (role === 1) {
    const departments = db.models.Departments;
    await db.models.Departments.deleteOne({ _id: token.body.id });
    await db.models.Departments.find().then(data => {
      result = data;
    });
  }
  return result;
}
