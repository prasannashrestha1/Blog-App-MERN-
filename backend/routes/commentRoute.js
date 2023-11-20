const express = require("express");
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require("bcrypt");
const Post = require("../models/Post.js");
const Comment = require("../models/Comment.js");

//create
router.post("/create", async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment)
    } catch (error) {
        res.status(500).json(error)
    }
})

//update
router.put('/:id', async(req, res) => {
    try {
        const updatedComment = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        req.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json(error);
    }
})


//delete
router.delete('/:id', async(req, res) => {
    try {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json("successfully deleted comment")
    } catch (error) {
        res.status(500).json(error);
    }
})


//Get post details
router.get('/:id', async(req, res) => {
    try {
    const comment = await Comment.findById(req.params.id)
    res.status(200).json(comment)
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get post
router.get('/', async(req, res) => {
    try {
    const comments = await Comment.find()
    res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get user post
router.get('/user/:userId', async(req, res) => {
    try {
    const comments = await Comment.find({userId: req.params.userId});
    res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;