const express = require('express');
const route = express.Router();

const {
    vnukogram,
    vnukolikes,
    vnukoprofile,
} = require('../controllers/vnukControllers');

route.get('/', vnukogram);

route.get('/likes', vnukolikes);

route.get('/profile', vnukoprofile)

module.exports = route;