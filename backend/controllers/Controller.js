const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
const Emp = require("../models/Emp");
const Books = require("../models/Booking");
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(401).send("User already exists.");
    }

    const encPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: encPass,
      name,
      phone,
      address,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    res.status(201).json({success:true});
  } catch (error) {
    console.log(error);
  }
};

exports.stillbookings = async (req, res) => {
  const { id } = req.query;

  try {
    const books = await Books.find({
      $and: [{ uid: id }, { completed: false }, { cancel: false }],
    });

    res.status(200).send(books);
  } catch (error) {
    console.log(error);
  }
};
exports.empregister = async (req, res) => {
  try {
    const { name, email, password, phone, address,profession } = req.body;

    const existingUser = await Emp.findOne({ email });

    if (existingUser) {
      res.status(401).send({res: "user already exists"});
    }else{

    const encPass = await bcrypt.hash(password, 10);

    const user = await Emp.create({
      email,
      password: encPass,
      name,
      phone,
      address,
      profession,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    res.status(201).json({success:true});
    }
  } catch (error) {
    console.log(error);
  }

};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("Field is missing");
    }
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );

      const name = user.name ;
      const phone = user.phone ;
      const address = user.address ;
      const mail = user.email ;
      const id = user._id ;

      res.status(200).json({ success: true, name,phone,address,mail,id });
    } else {
      res.status(400).json("Email or Password Incorrect.");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.emplogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("Field is missing");
    }
    const user = await Emp.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );

      const name = user.name ;
      const phone = user.phone ;
      const address = user.address ;
      const mail = user.email ;
      const prof = user.profession;
      const id = user._id ;
      res.status(200).json({ success: true, name,phone,address,mail,prof,id });
    } else {
      res.status(400).json("Email or Password Incorrect.");
    }
  } catch (error) {
    console.log(error);
  }
};


exports.pmfetch = async(req,res) =>{

  try{
    const elcs = await Emp.find({profession:"plumber"})

    res.status(200).send(elcs);
  }catch(error){
    console.log(error)
  }
}

exports.elefetch = async(req,res) =>{

  try{
    const elcs = await Emp.find({profession:"electrician"})

    res.status(200).send(elcs);
  }catch(error){
    console.log(error)
  }
}

exports.paintfetch = async(req,res) =>{

  try{
    const elcs = await Emp.find({profession:"Painter"})

    res.status(200).send(elcs);
  }catch(error){
    console.log(error)
  }
}

exports.bookemp = async(req,res)=>{
const {eid,uid,ename,uname,task,date,phone} = req.body ;

try{
  const booking = await Books.create({
    eid,
    uid,
    uname,
    ename,
    task,
    date,
    completed:false,
    cancel:false,
    uphone:phone
  });

  res.status(201).json({success:true});
}catch(error){
  console.log(error);
}
}

exports.bookings = async(req,res)=>{

  const {id} = req.query ;

  try{
    const books = await Books.find({ $and: [{ eid: id }, { completed: false },{ cancel: false }]});

    res.status(200).send(books);
  }catch(error){
    console.log(error);
  }
}


exports.setcom = async (req, res) => {
  const { id } = req.query;
  try {
    await Books.updateOne(
      { _id: id },
      {
        completed: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
exports.setcan = async (req, res) => {
  const { id } = req.query;
  try {
    await Books.updateOne(
      { _id: id },
      {
        cancel: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
exports.combooks = async (req, res) => {
  const { id } = req.query;

  try {
    const books = await Books.find({
      $and: [{ eid: id }, { completed: true },{cancel:false}],
    });

    res.status(200).send(books);
  } catch (error) {
    console.log(error);
  }
};

exports.usercompleted = async (req, res) => {
  const { id } = req.query;

  try {
    const books = await Books.find({
      $and: [{ uid: id }, { completed: true }, { cancel: false }],
    });

    res.status(200).send(books);
  } catch (error) {
    console.log(error);
  }
};

