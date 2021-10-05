const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// renders dashboard if user is logged in 
router.get('/', withAuth, (req, res) => {
    console.log("/dashboard route");
    if (!req.session.loggedIn) {
        res.redirect('/login');
    }

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
    console.log("/dashboard/edit/id route");
    console.log(req.params);
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
        console.log(postData);
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('edit-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});


router.get('/create/', withAuth, (req, res) => {
    console.log("/dashboard/create route");
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
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('add-post', { posts, loggedIn: true });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;