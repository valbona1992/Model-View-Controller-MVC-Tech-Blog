const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Comment} = require('../model');
const withAuth = require('../utils/auth');

// renders dashboard if user is logged in 
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'content', 'date'],
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
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// route to edit post
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'content', 'date'],
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
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// edit the user 
router.get('/edituser', withAuth, (req, res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.session.user_id
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({message: "No user found"});
            return;
        }
        const user = userData.get({plain:true});
        res.render('edit-user', {
            user,
            loggedIn: true
        });
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

module.exports = router;