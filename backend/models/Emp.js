const mongoose = require("mongoose");


const Emp = new mongoose.Schema({
  email: String,
  password: String,
  phone:String,
  address:String,
  name:String,
  token: {
    type: String,
  },
  profession:String

});

const Emps = mongoose.model("emps", Emp);
module.exports = Emps;
