const render = require('../lib/render')

const Vnukogram = require('../views/Vnukogram');
const Vnukolikes = require('../views/Vnukolikes');
const Vnukoprofile = require('../views/Vnukoprofile');

const { Picture, 
    Grandparent 
} = require('../db/models');

// const { Picture } = require('./db/models')
// app.get('/ad', async (req, res) => {
//   const picture = await Picture.findAll()
//   console.log('picture==================================', picture)
// })


exports.vnukogram = async (req, res) => {
    try {
        const picture = await Picture.findAll()
        // console.log('pictures---------------', picture)
        render(Vnukogram, { picture }, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
};


exports.vnukolikes = async (req, res) => {
    try {
        // const usersGrandma = req.session.user.granmaId || 1;
        const usersGrandma = 1;
        const grandma = await Grandparent.findOne({ include: Picture, where: { id: usersGrandma }})
        const grandmaLikes = grandma.Pictures
        // console.log('grandmaLikes', grandmaLikes)
        render(Vnukolikes, { grandmaLikes }, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
};

exports.vnukoprofile = async (req, res) => {
    try {
        const grandparents = await Grandparent.findAll()
        // console.log('grandparents', grandparents)
        render(Vnukoprofile, {}, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
};
