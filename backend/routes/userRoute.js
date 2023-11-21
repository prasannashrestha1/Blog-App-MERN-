const express = require("express");
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require("bcrypt");
const Post = require("../models/Post.js");
const Comment = require("../models/Comment.js");
const verifyToken = require("../verifyToken.js");

//update
router.put('/:id', verifyToken, async(req, res) => {
    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
          }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        const{password, ...rest} = updatedUser._doc;
        req.status(200).json(rest);
    } catch (error) {
        res.status(500).json(error);
    }
})


//delete
router.delete('/:id', verifyToken, async(req, res) => {
    try {
    await User.findByIdAndDelete(req.params.id);
    await Post.deleteMany({userId:req.params.id});
    await Comment.deleteMany({userId:req.params.id});
    res.status(200).json("successfully deleted account")
    } catch (error) {
        res.status(500).json(error);
    }
})


//Get User
router.get('/:id', async(req, res) => {
    try {
    const user = await User.findById(req.params.id)
    const{password, ...rest} = user._doc;
    res.status(200).json(rest)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports  = router;