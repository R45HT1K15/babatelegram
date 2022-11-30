const route = require('express').Router();
const fileMiddleware = require('../middleware/file');

const { Picture } = require('../db/models');


route.post('/upload', fileMiddleware.single('file'), (req, res) => {
    console.log(req.file)
    try {
        if(req.file) {
            const { user } = req.session;
            // const picture = await Picture.create({ url: req.file.path, grandparent_id: user.id, countLike: 0 });
            // res.json(req.file)
            res.send('файл записан')
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports = route;