const jwt = require("jsonwebtoken");
const db = require("../_helpers/db.js");

const formidable = require('formidable');

var fs =require('fs-extra');
var path = require('path');

module.exports = {
  upload
};



async function upload(req, res) {
 var  result, id, role  = 0, update = {}

 if (req) {
   var { role } = jwt.decode(req.headers.authorization.substr(7)); // substr cut "Bearer"
 }

if (role === 1) {
  var form = new formidable.IncomingForm();
  form.uploadDir = "./tmp";       //set upload directory
  form.keepExtensions = true;
   form.parse(req,async function(err, fields, files) {
    id = fields._id;
    fs.rename(files.uploadImg.path, './public/img/'+files.uploadImg.name, function(err) {
      if (err)
      return err;
    });
    // remove all from dir /tmp
    fs.remove(files.uploadImg.path);
    update = {"_id" : fields._id, "image" : "/img/"+files.uploadImg.name}
    const products = db.models.Products;
    await db.models.Products.find({ _id: id }).updateOne(update);
   });
}
/*
await db.models.Products.find().then(data => {
  result = data;
 return result;
});
*/
}
