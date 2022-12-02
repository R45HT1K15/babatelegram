const render = require('../lib/render')

const Vnukogram = require('../views/Vnukogram');
const Vnukolikes = require('../views/Vnukolikes');
const Vnukoprofile = require('../views/Vnukoprofile');

const { Picture, 
    Grandparent,
    Grandchild,
    Grandparent_grandchild
} = require('../db/models');

// const { Picture } = require('./db/models')
// app.get('/ad', async (req, res) => {
//   const picture = await Picture.findAll()
//   console.log('picture==================================', picture)
// })


exports.vnukogram = async (req, res) => {
    try {
        const vnuchok = await Grandchild.findOne({ where: { id: req.session.user.id }, include: Grandparent})
        const picture = []
        
        const choto = vnuchok.Grandparents.map(async (el) => {
            const pic = await Picture.findAll({where: { grandparent_id: el.id }, include: Grandparent})
            picture.push(pic)
        })
        await Promise.all(choto)
        const pictures = picture.flat()
        const { user } = req.session
        render(Vnukogram, { pictures, user }, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
};


exports.vnukolikes = async (req, res) => {
    try {
        // const usersGrandma = req.session.user.granmaId || 1;
        const usersGrandma = 1;
        const grandma = await Grandparent.findOne({ include: Picture, where: { id: usersGrandma }, raw: true})
        const grandmaLikes = grandma.Pictures
        const { user } = req.session;
        // console.log('grandmaLikes', grandmaLikes)
        render(Vnukolikes, { grandmaLikes, user }, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
};

exports.vnukoprofile = async (req, res) => {
    try {
        const { user } = req.session;
        const grandparents = await Grandparent.findAll({ raw: true})
        const myRelatives = await Grandchild.findOne({ where: { id: user.id }, include: Grandparent })
        render(Vnukoprofile, { myRelatives, grandparents, user }, res);
        // console.log('myRelatives ==================', myRelatives);  
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
};

exports.addBabushka = async (req, res) => {
  const { id } = req.body;
  try{
    const { user } = req.session
    const [a,b] = await Grandparent_grandchild.findOrCreate({where: {grandparent_id: id, grandchild_id: user.id}, raw:true})
    const babushka = await Grandparent.findOne ({where: {id}})
    res.json({ babushka, a, b })
 }
 catch (error) {
  console.log(error)
 }
}

exports.deleteBabushka = async(req, res) => {
  const { babaID } = req.body;
  const { user } = req.session;
  try {
    const answer = await Grandparent_grandchild.destroy({where: {grandparent_id: babaID, grandchild_id: user.id}});
    const anyBabushka = await Grandchild.findOne({ where: { id: user.id }, include: Grandparent })

    res.json({ answer, anyBabushka });
  }
  catch (error) {
    console.log(error)
   }
}
