const express = require('express');
const route = express.Router();

const {
  vnukogram,
  vnukolikes,
  vnukoprofile,
  addBabushka,
  deleteBabushka,
  babushkaLike,
} = require('../controllers/vnukControllers');

route.get('/', vnukogram);

route.get('/likes', vnukolikes);

route.get('/profile', vnukoprofile);

route.post('/profile', addBabushka);

route.delete('/babushka', deleteBabushka);
route.post('/babushkalike', babushkaLike);

module.exports = route;
