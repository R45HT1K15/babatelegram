const router = require('express').Router();

const {
  babushkagram,
  babushkaNewPhoto,
  babushkaPhotoEdit,
  babushkaProfile,
  addLike,
  deleteLike,
} = require('../controllers/babushkaControllers');

router.get('/', babushkagram);

router.get('/newPhoto', babushkaNewPhoto);

router.get('/profile', babushkaProfile);

router.get('/profile/:id/:imageid', babushkaPhotoEdit);

router.put('/like', addLike);
router.delete('/like', deleteLike);

module.exports = router;
