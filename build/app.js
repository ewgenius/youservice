"use strict";
const dotenv_1 = require('dotenv');
const keystone = require('keystone');
dotenv_1.config();
keystone.init({
    name: 'youservice',
    brand: 'youservice',
    'auto update': true,
    'cookie secret': process.env.COOKIE_SECRET,
    session: true,
    auth: true,
    'user model': 'User',
    mongo: process.env.MONGO_URL
});
keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.start({
    onHttpServerCreated() {
        keystone.mongoose.Promise = Promise;
    }
});
