const router = require('express').Router();

const {
    vnukogram,
    vnukolikes,
    vnukoprofile,
} = require('../controllers/vnukControllers');

router.get('/', vnukogram);



router.get('/likes', vnukolikes);



router.get('/profile', vnukoprofile)


module.exports = router;