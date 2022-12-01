const render = require('../lib/render');

const Babushkagram = require('../views/Babushkagram');
const BabushkaNewPhoto = require('../views/BabushkaNewPhoto');
const BabushkaPhotoDetail = require('../views/BabushkaPhotoDetail');
const BabushkaProfile = require('../views/BabushkaProfile');
const BabushkasPhoto = require('../views/BabushkasPhoto');

const { Picture, Grandparent, Like } = require('../db/models');

exports.babushkagram = async (req, res) => {
  const grandparent_id = req.session.user.id;
  try {
    const pictures = await Picture.findAll({
      include: Grandparent,
      order: [['id', 'DESC']],
      raw: true,
    });
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
    const userid = req.session.user.id;
    const { user } = req.session;
    const pictures = await Picture.findAll({
      where: { grandparent_id: userid },
      order: [['id', 'DESC']],
      include: Grandparent,
    });
    render(BabushkaProfile, { pictures, user }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

exports.BabushkaPhotoDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const { user } = req.session;
    const picture = await Picture.findOne({ where: { id } });
    const like = await Like.findOne({
      where: { picture_id: id, grandparent_id: user.id },
    });

    render(BabushkaPhotoDetail, { picture, user, like }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

exports.addLike = async (req, res) => {
  try {
    const { pictureId } = req.body;
    const grandparent_id = req.session.user.id;
    const [like, answer] = await Like.findOrCreate({
      where: {
        picture_id: pictureId,
        grandparent_id,
      },
    });
    if (answer) {
      const picture = await Picture.findOne({
        where: {
          id: pictureId,
        },
      });
      const incrementResult = await picture.increment('countLike');
      const { countLike } = incrementResult;
      return res.json({ answer, countLike });
    }
    res.json({ answer });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteLike = async (req, res) => {
  try {
    const { pictureId } = req.body;
    const grandparent_id = req.session.user.id;
    const answer = await Like.destroy({
      where: { picture_id: pictureId, grandparent_id },
    });
    if (answer === 1) {
      const picture = await Picture.findOne({
        where: {
          id: pictureId,
        },
      });
      const decrementResult = await picture.decrement('countLike');
      const { countLike } = decrementResult;
      return res.json({ answer, countLike });
    }
    res.json({ answer });
  } catch (error) {}
};

exports.deletePicture = async (req, res) => {
  try {
    const { pictureId } = req.body
    const qwer = await Picture.destroy({
      where: {id: pictureId},
    })
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
  }
}

exports.photoBabushki = async (req, res) => {
  try {
    const granduser = req.params;
    const grandparent_id = req.session.user.id;
    const { user } = req.session;
    const picture = await Picture.findAll({include: Grandparent})

    const likeOfUser = await Like.findAll({
      attributes: ['picture_id'],
      where: { grandparent_id },
      raw: true,
    });

    const arrOfPicturesWhichUserLike = [];
    likeOfUser.forEach((el) =>
      arrOfPicturesWhichUserLike.push(el['picture_id'])
    );

    const filteredPicture = picture.filter((el) => el.Grandparent.login === granduser.name)
    render(BabushkasPhoto, { user, filteredPicture, arrOfPicturesWhichUserLike }, res)


    // console.log('filteredPicture', filteredPicture)
    // console.log('filteredPicture', filteredPicture)

  } catch (error) {
    console.log(error)
  }
}