const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phonenumber: req.body.phonenumber,
      email: req.body.email,
      desc: req.body.desc,
    });
    await newUser.save();
    res.status(200).json("Register Success");

    
  } catch (err) {
    // res.status(500).json(err);
    console.log(err)
  }
});
   



module.exports = router;
