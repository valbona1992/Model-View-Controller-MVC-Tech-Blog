const router = requite('express').Router();
const sequelize = requite('../config/connection.js');
const { Post, User, Comment} = require('../models');

// Gets the homepage rendered
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'date', 'post'],
        order: [['date', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comment, 
                attributes: ['id', 'comment, post_id', 'user_id', 'date'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(postData => {
        const posts = postData.map(post => post.get({plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    })
})