const router = require('express').Router();
const sequelize = require('../config/connection.js');
const { Post, User, Comment} = require('../models');

// Gets the homepage rendered
router.get('/', (req, res) => {
    console.log("/ route");
    Post.findAll({
        attributes: ['id', 'title', 'date', 'content'],
        order: [['date', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment, 
                attributes: ['id', 'comment', 'post_id', 'user_id', 'date'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(postData => {
        const posts = postData.map(post => post.get({plain: true }));
        console.log(req.session.loggedIn);
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Render single post on a page
router.get('/post/:id', (req, res) => {
    console.log("/post/id route");
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'date', 'content'],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment, 
                attributes: ['id', 'comment', 'post_id', 'user_id', 'date'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(postData => {
        if(!postData) {
            res.status(404).json({message: "No post found"});
            return;
        }
        const post = postData.get({plain: true});
        console.log(post);
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// gets the login page
router.get('/login', (req, res) => {
    if(req.session.loggedIn){
        console.log("logged in");
        res.redirect('/');
        return;
    }
    res.render('login');
});

// gets the signup page
router.get('/signup', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;