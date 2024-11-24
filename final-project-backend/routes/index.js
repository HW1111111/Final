var express = require('express');
var router = express.Router();

const {User, Post, Comment} = require('../model'); // Assuming models are in models.js

// User Registration
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// User Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email, password: req.body.password});
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Create a Post
router.post('/posts', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

//get method for create post test case, create any thing , return it
router.get('/create-post', async (req, res) => {
    try {
        const post = new Post({
            title: 'My First Post',
            content: 'This is my first post',
            author: '672ebb82b43e140f3d43dc8b',
        })
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Get All Posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().populate('author');
        res.send(posts);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get a Single Post
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author');
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update a Post
router.put('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a Post
router.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add a Comment to a Post
router.post('/posts/:id/comments', async (req, res) => {
    try {
        const comment = new Comment({
            ...req.body,
            postId: req.params.id
        });
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get Comments for a Post
router.get('/posts/:id/comments', async (req, res) => {
    try {
        const comments = await Comment.find({postId: req.params.id}).populate('author');
        res.send(comments);
    } catch (error) {
        res.status(400).send(error);
    }
});
// get user by id
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
