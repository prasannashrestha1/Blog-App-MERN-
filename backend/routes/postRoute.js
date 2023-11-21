const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const Post = require("../models/Post.js");
const Comment = require("../models/Comment.js");

//create
router.post("/create", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    req.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("successfully deleted Post");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get post details
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get posts
router.get("/", async (req, res) => {
  try {
    const query = req.query
    const searchFilter = {
      title: { $regex: query.search, $options:"i" },
    };
    const posts = await Post.find(query.search ?searchFilter : null);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get user post
router.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
