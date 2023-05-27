const mongoose = require("mongoose");


const User = new mongoose.Schema({
  email: String,
  password: String,
  phone:String,
  address:String,
  name:String,
  token: {
    type: String,
  },
  

});

const Users = mongoose.model("users", User);
module.exports = Users;
