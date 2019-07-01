const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const db = require("../_helpers/db.js");

const formidable = require('formidable');

var fs =require('fs-extra');    //File System-needed for renaming file etc
var path = require('path');

module.exports = {
  upload
};

async function upload(req, res) {
 var form = new formidable.IncomingForm();
   //Formidable uploads to operating systems tmp dir by default
   form.uploadDir = "./tmp";       //set upload directory
   form.keepExtensions = true;     //keep file extension

   form.parse(req, function(err, fields, files) {
     console.log(fields)
     // после переименования удалять из tmp
       fs.rename(files.uploadImg.path, './img/'+files.uploadImg.name, function(err) {
       if (err)
           throw err;
       });
       fs.remove(files.uploadImg.path);
       return (err) ?  err : 'ok'
   });
}
