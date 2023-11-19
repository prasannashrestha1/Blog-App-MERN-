const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//regiter
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return res.status(404).json("User not found");

    const validPassword = await bcrypt.compareSync(
      password,
      validUser.password
    );
    if (!validPassword) return res.status(401).json("Wrong Credentials");

    const token = jwt.sign({id:validUser._id},`${process.env.JWT_SECRET_KEY}`);

    const {password: pass, ...rest} = validUser._doc;
    res.cookie("jwtToken", token).status(200).json(rest);
  } catch (error) {
    console.log(error);
  } 
});

//logout
router.get('/logout', async(req, res) => {
  try {
    res.clearCookie("jwtToken", {sameSite:"none", secure: true}).status(200).send("User logged out successfully")
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
