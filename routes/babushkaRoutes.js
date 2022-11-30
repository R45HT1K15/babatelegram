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

router.get('/', babushkagram);

router.get('/newPhoto', babushkaNewPhoto);

router.get('/profile', babushkaProfile);

router.get('/profile/:id', BabushkaPhotoDetail);

router.put('/like', addLike);
router.delete('/like', deleteLike);

router.delete('/onephoto', deletePicture);

module.exports = router;
