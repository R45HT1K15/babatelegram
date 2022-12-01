const router = require('express').Router();

const {
  babushkagram,
  babushkaNewPhoto,
  BabushkaPhotoDetail,
  babushkaProfile,
  addLike,
  deleteLike,
  deletePicture,
} = require('../controllers/babushkaControllers');

const notAuth = require('../middleware/notAuth')

router.get('/', notAuth, babushkagram);

router.get('/newPhoto', notAuth, babushkaNewPhoto);

router.get('/profile', notAuth, babushkaProfile);

router.get('/profile/:id', notAuth, BabushkaPhotoDetail);

router.put('/like', addLike);
router.delete('/like', deleteLike);

router.delete('/onephoto', deletePicture);

module.exports = router;
