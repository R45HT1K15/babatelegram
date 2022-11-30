const router = require('express').Router();

const {
    babushkagram,
    babushkaNewPhoto,
    babushkaPhotoEdit,
    babushkaProfile
} = require('../controllers/babushkaControllers');


router.get('/', babushkagram);



router.get('/newPhoto', babushkaNewPhoto)



router.get('/profile', babushkaProfile)



router.get('/profile/:id/:imageid', babushkaPhotoEdit)






module.exports = router;