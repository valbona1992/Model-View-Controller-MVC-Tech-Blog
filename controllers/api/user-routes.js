const router = require('express').Router();
const { User, Post, Comment } = require('../../model');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(userData => res.json(userData))
    .catch(err => {
        res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post, 
                attributes: ['id', 'title', 'content', 'date']
            },
            {
            model: Comment,
            attributes: ['id', 'title', 'content', 'date'],
            include: {
                model: Post,
                attributes: ['title']
                }
            }
        ]
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({message: 'No user found'});
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.password,
        password: req.body.password
    })
    .then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true; 
            
            res.json(userData);
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(400).json({message: 'No user found with that email'});
            return;
        }
        const password = userData.checkPassword(req.body.password);
        if(!password){
            res.status(404).json({message: 'Incorrect password'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedin = true; 

            res.json({user: userData, message:'You are logged in!'});
        });
    });
});

router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', withAuth, (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData[0]) {
            res.status(404).json({message: "No user found"});
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(userData => {
        if(!userData) {
            res.status(404).json({message: 'No user found'});
            return;
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
