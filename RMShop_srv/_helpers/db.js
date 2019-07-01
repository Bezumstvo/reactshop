const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const UsersSchema = new Schema({
  login: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const CustomersSchema = new Schema({
  first_name: { type: String, required: true },
  second_name: { type: String, required: true },
  middle_name: { type: String },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address_home: { type: String },
  address_work: { type: String },
  description: { type: String }
});

const DepartmentsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String, lowercase: true, get: v => `${root}${v}` }
});

const CategoriesSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String, lowercase: true, get: v => `${root}${v}` }
});

const ProductsSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  weight: { type: Number, required: true },
  size: { type: String, required: true },
  attribute: [{ type: String }],
  category: { type: ObjectId, required: true },
  department: { type: ObjectId, required: true },
  image: {type: String,  default: '/public/nophoto.png' }
});

const Users = mongoose.model("Users", UsersSchema);
const Customers = mongoose.model("Customers", CustomersSchema);
const Departments = mongoose.model("Departments", DepartmentsSchema);
const Categories = mongoose.model("Categories", CategoriesSchema);
const Products = mongoose.model("Products", ProductsSchema);

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/rmshop",
  { useNewUrlParser: true }
);
// Exporting the database object for shared use:
module.exports = mongoose;
