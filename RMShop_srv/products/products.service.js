const jwt = require("jsonwebtoken");
const db = require("../_helpers/db.js");

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
};
async function getAll(token) {
  var result;
  const products = db.models.Products;
  await db.models.Products.find().then(data => {
    result = data;
  });
  return result;
}
async function getById(token) {
  var result;
  const product = db.models.Products;
  await db.models.Products.find({"_id":token.body.id}).then(data => {
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
    const products = db.models.Products;
    const new_product = new products(token.body);
    await new_product.save();
    await db.models.Products.find().then(data => {
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
    const products = db.models.Products;
    await db.models.Products.find({ _id: token.body._id }).updateOne(token.body);
    await db.models.Products.find().then(data => {
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
    const products = db.models.Products;
    await db.models.Products.deleteOne({ _id: token.body.id });
    await db.models.Products.find().then(data => {
      result = data;
    });
  }
  return result;
}
