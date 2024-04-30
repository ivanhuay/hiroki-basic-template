const express = require('express');
const router = express.Router();
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function validation(req, res, next) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({error: 'missing params', code: 'missing_params', status: 'error'});
        return;
    }
    next();
}

router.post('/login', validation, (req, res) => {
    User.findOne({email: req.body.email}).then((user) => {
        if (!user) {
            res.status(400).json({error: 'user not found!', code: 'user_not_found'});
            return;
        }
        if (!user.validPassword(req.body.password)) {
            res.status(400).json({error: 'authentication failed!', code: 'authentication_failed'});
            return;
        }
        let token = jwt.sign(user.toJSON(), JWT_SECRET);
        res.json({
            token
        });
    }).catch((error) => {
        req.log.error('findUserError: ', error);
        res.status(400).json({error: 'authentication error', code: 'authentication_failed'});
    });
});

function checkIfExist(req, res, next) {
    User.count({email: req.body.email}).then((count) => {
        if (count === 0) {
            next();
            return;
        }
        res.status(400).json({error: 'email already in use!', code: 'username_alredy_used'});
    }).catch((error) => {
        req.log.error('countUserError: ', error);
    });
}

router.post('/signup', validation, checkIfExist, (req, res) => {
    const newUser = new User({
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password,
        email: req.body.email
    });

    newUser.save().then(() => {
        res.json({status: 'completed'});
    }).catch((error) => {
        req.log.error('signupError', error);
        res.status(400).json({error: 'save user error', code: 'save_error', status: 'error'});
    });
});

module.exports = router;