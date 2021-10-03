const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all blog posts
router.get('/', (req, res) => {
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
    .then(postData => res.json(postData))
    .catch(err => {
        res.status(500).json(err);
    });
});

// get single post by id
router.get('/:id', (req, res) => {
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
        if(!postData) {
            res.status(404).json({message: "No post found"});
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// create new post
router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then(postData => res.json(postData))
    .catch(err => {
        res.status(500).json(err);
    })
});

// update a post 
router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body,
        {
          where: {
              id: req.params.id
          }  
        }
    )
    .then(postData => {
        if(!postData) {
            res.status(404).json({message: "No post found"});
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
})

// delete a post
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(postData => {
        if(!postData) {
            res.status(404).json({message: "No post found"});
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;