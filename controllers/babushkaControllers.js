const render = require('../lib/render');

const Babushkagram = require('../views/Babushkagram');
const BabushkaNewPhoto = require('../views/BabushkaNewPhoto');
const BabushkaPhotoEdit = require('../views/BabushkaPhotoEdit');
const BabushkaProfile = require('../views/BabushkaProfile');

const { Picture, Grandparent, Like } = require('../db/models');

exports.babushkagram = async (req, res) => {
  const grandparent_id = req.session.user.id;
  try {
    const pictures = await Picture.findAll({ include: Grandparent, raw: true });
    const likeOfUser = await Like.findAll({
      attributes: ['picture_id'],
      where: { grandparent_id },
      raw: true,
    });
    const arrOfPicturesWhichUserLike = [];
    likeOfUser.forEach((el) =>
      arrOfPicturesWhichUserLike.push(el['picture_id'])
    );

    // console.log('pictures------------------', pictures);

    const { user } = req.session;
    render(Babushkagram, { pictures, user, arrOfPicturesWhichUserLike }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

exports.babushkaNewPhoto = (req, res) => {
  render(BabushkaNewPhoto, {}, res);
};

exports.babushkaProfile = async (req, res) => {
    try {
        const userid = req.session.user.id
        const { user } = req.session
        const pictures = await Picture.findAll({where: { grandparent_id: userid }, include: Grandparent });
        render(BabushkaProfile, {pictures, user}, res);
    } catch (error) {
        console.log('\x1b[31m', 'Error', error);
    }
}

exports.babushkaPhotoEdit = async (req, res) => {
  try {
    //req.params.id
    const picture = await Picture.findOne({ where: { id: 3 } });
    console.log('picture', picture);
    render(BabushkaPhotoEdit, {}, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

exports.addLike = async (req, res) => {
  try {
    const { pictureId } = req.body;
    const grandparent_id = req.session.user.id;
    const [like, created] = await Like.findOrCreate({
      where: {
        picture_id: pictureId,
        grandparent_id,
      },
    });

    res.json({ created });
  } catch (error) {
    console.log(error);
  }
};
