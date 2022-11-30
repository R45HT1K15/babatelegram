const router = require('express').Router();

const {
  babushkagram,
  babushkaNewPhoto,
  babushkaPhotoEdit,
  babushkaProfile,
  addLike,
} = require('../controllers/babushkaControllers');

router.get('/', babushkagram);

router.get('/newPhoto', babushkaNewPhoto);

router.get('/profile', babushkaProfile);

router.get('/profile/:id/:imageid', babushkaPhotoEdit);

router.put('/like', addLike);

module.exports = router;
