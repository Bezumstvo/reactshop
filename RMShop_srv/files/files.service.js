const config = require("config.json");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const db = require("../_helpers/db.js");
const fs = require('fs');

module.exports = {
  upload
};

async function upload(token) {
  var result;
  if (token) {
    var { role } = jwt.decode(token.headers.authorization.substr(7)); // substr cut "Bearer"
  }
  if (role === 1) {
    const Categories = db.models.Categories;
    const new_category = new Categories({
      name: token.body.name,
      description: token.body.description
    });
    /*
    await new_category.save();
    await db.models.Categories.find().then(data => {
      result = data;
    });
    */
    var file = token.body;
//    console.log(file);
    const data = new Uint8Array(Buffer.from(JSON.stringify(file)));
    fs.writeFile('test.jpg', data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });


  }

  return result;
}
