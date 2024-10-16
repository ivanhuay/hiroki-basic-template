'use strict';
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    fullname: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, {
    timestamps: true
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.toJSON = function() {
    let obj = this.toObject();
    Reflect.deleteProperty(obj, 'password');
    return obj;
};

userSchema.pre('save', function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = user.generateHash(user.password);
    }
    return next();
});

module.exports = mongoose.model('User', userSchema);
