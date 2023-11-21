const express = require("express");
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require("bcrypt");
const Post = require("../models/Post.js");
const Comment = require("../models/Comment.js");
const verifyToken = require("../verifyToken.js");

//create
router.post("/create", verifyToken, async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update
router.put('/:id', verifyToken, async(req, res) => {
    try {
        const updatedComment = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        req.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json(error);
    }
})


//delete
router.delete('/:id', verifyToken, async(req, res) => {
    try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("successfully deleted comment")
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get post comments
router.get('/post/:postId', async(req, res) => {
    try {
    const comments = await Comment.find({postId: req.params.postId});
    res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;