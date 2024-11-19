// backend/routes/postRoutes.js
const express = require('express');
const Post = require('../models/Post');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all posts
router.get('/', authMiddleware, async (req, res) => {
    try {
        const posts = await Post.find({ user: req.user.id });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new post
router.post('/', authMiddleware, async (req, res) => {
    const { content } = req.body;
    const newPost = new Post({ content, user: req.user.id });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a post
router.delete('/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findByIdAndDelete(id);
        res.status(200).json({ message: "Post deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
