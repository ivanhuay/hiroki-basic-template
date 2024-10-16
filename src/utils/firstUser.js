'use strict';
const Users = require('../models/users');
const {ADMIN_EMAIL, ADMIN_PASS} = process.env;

const firstUser = async() => {
    const users = await Users.find({});
    if(users.length === 0) {
        console.log('Creating first user');
        const admin = new Users({
            name: 'Admin',
            email: ADMIN_EMAIL,
            password: ADMIN_PASS,
            role: 'admin'
        });
        await admin.save();
        console.log('Admin created.');
    }
};

module.exports = firstUser;
