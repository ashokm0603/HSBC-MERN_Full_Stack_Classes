const User = require("../model/userModel");

const bcrypt = require("bcrypt");

//user register Controller

const register = async (req, res) => {
  
  const { fname, email, phone, password } = req.body;
  const hashedPassword = bcrypt.hash(password, 10);
  console.log((await hashedPassword).toString());


  
  const newUser = new User({
    fname,
    email,
    phone,
    password: (await hashedPassword).toString(),
  });

  await newUser.save();
  res
    .status(200)
    .json({ message: "user Register Successfully.", createdUser: newUser });

  res.status(500).json({ message: "Server  Not Found" });
};

//user login controller
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const loginUser = await User.findOne({ email: username });

    const checkPassword =await bcrypt.compare(password, loginUser.password);
 
    if (!checkPassword) {
      res.status(400).json({ message: "Invalid Password" });
    }
    if (!loginUser) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(201).json({message:"User Login Successfully"})

  } catch (err) {
    res.status(500).json({ message: "server not fount" });
  }
};

module.exports = { register, login };
