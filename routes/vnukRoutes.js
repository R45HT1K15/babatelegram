const express = require('express');
const route = express.Router();

const {
    vnukogram,
    vnukolikes,
    vnukoprofile,
    addBabushka,
    deleteBabushka
} = require('../controllers/vnukControllers');

route.get('/', vnukogram);

route.get('/likes', vnukolikes);

route.get('/profile', vnukoprofile);

route.post('/profile', addBabushka);

route.delete('/babushka', deleteBabushka);

module.exports = route;