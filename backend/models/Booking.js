const mongoose = require("mongoose") ;


const BookingSchema = new mongoose.Schema({
    uname:String,
    ename:String,
    task:String,
    date:String,
    uid:String,
    eid:String,
    completed:Boolean,
    cancel:Boolean,
    uphone:String
});

const Books = mongoose.model("bookings", BookingSchema);
module.exports = Books;
