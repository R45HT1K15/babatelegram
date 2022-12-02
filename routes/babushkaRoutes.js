const router = require('express').Router();

const {
  babushkagram,
  babushkaNewPhoto,
  BabushkaPhotoDetail,
  babushkaProfile,
  addLike,
  deleteLike,
  deletePicture,
  photoBabushki,
  changeHelp,
  deleteVnuck,
} = require('../controllers/babushkaControllers');

const notAuth = require('../middleware/notAuth');

router.get('/', notAuth, babushkagram);

router.get('/newPhoto', notAuth, babushkaNewPhoto);

router.get('/profile/:name', notAuth, babushkaProfile);

router.get('/profile/:name/:id', notAuth, BabushkaPhotoDetail);

router.put('/like', addLike);
router.delete('/like', deleteLike);

router.delete('/onephoto', deletePicture);

router.get('/:name', photoBabushki);

router.put('/help', changeHelp);
router.delete('/vnuck', deleteVnuck);

module.exports = router;
