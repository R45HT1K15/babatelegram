const route = require('express').Router();
const fileMiddleware = require('../middleware/file');

const { Picture } = require('../db/models');


route.post('/upload', fileMiddleware.single('file'), async (req, res) => {
    console.log('qwweqweqweqweqweqweqweqweqweqweqweqweqweqweqw', req.file)
    try {
        if(req.file) {
            const { user } = req.session;
            const picture = await Picture.create({ url: req.file.path.slice(6), grandparent_id: user.id, countLike: 0 });
            // res.json(req.file)
            // res.send('файл записан')
            res.redirect('/babushkagram')
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = route;