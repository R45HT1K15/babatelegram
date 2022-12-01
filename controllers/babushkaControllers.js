//подключаем рендер
const render = require('../lib/render');

//подключаем вьюшки
const Babushkagram = require('../views/Babushkagram');
const BabushkaNewPhoto = require('../views/BabushkaNewPhoto');
const BabushkaPhotoDetail = require('../views/BabushkaPhotoDetail');
const BabushkaProfile = require('../views/BabushkaProfile');
const BabushkasPhoto = require('../views/BabushkasPhoto');

//подключаем модели
const { Picture, Grandparent, Like } = require('../db/models');

//отрисовка главной страницы
exports.babushkagram = async (req, res) => {
  //забираем из сессии id пользователя
  const grandparent_id = req.session.user.id;
  try {
    //находим все картинки и распологаем их по id
    const pictures = await Picture.findAll({
      include: Grandparent,
      order: [['id', 'DESC']],
      raw: true,
    });
    //загружаем все лайки пользователей
    const likeOfUser = await Like.findAll({
      attributes: ['picture_id'],
      where: { grandparent_id },
      raw: true,
    });
    //создание массива лайков
    const arrOfPicturesWhichUserLike = [];
    likeOfUser.forEach((el) =>
      arrOfPicturesWhichUserLike.push(el['picture_id'])
    );

    const { user } = req.session;
    render(Babushkagram, { pictures, user, arrOfPicturesWhichUserLike }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

//создание новой картинки с api'хой
exports.babushkaNewPhoto = (req, res) => {
  const { user } = req.session;
  render(BabushkaNewPhoto, { user }, res);
};

//отрисовка личного профиля
exports.babushkaProfile = async (req, res) => {
  try {
    const login = req.params.name;
    const { user } = req.session;
    const grandUser = await Grandparent.findOne({ where: { login: login } });
    const nameUser = grandUser;
    const pictures = await Picture.findAll({
      where: { grandparent_id: grandUser.id },
      order: [['id', 'DESC']],
      include: Grandparent,
    });
    render(BabushkaProfile, { pictures, user, nameUser }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

//отрисовка определенной фотографии в профиле пользователя
exports.BabushkaPhotoDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const { user } = req.session;
    const picture = await Picture.findOne({
      where: { id },
      include: Grandparent,
    });
    const like = await Like.findOne({
      where: { picture_id: id, grandparent_id: user.id },
    });
    render(BabushkaPhotoDetail, { picture, user, like }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};
//добавление лайков к фотографии
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

//удаление лайков с фотографии
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

//удаление фотографии со страницы
exports.deletePicture = async (req, res) => {
  try {
    const { pictureId } = req.body;
    const qwer = await Picture.destroy({
      where: { id: pictureId },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

//фильтруем страницу по фотографияем конкретного пользователя
exports.photoBabushki = async (req, res) => {
  try {
    const granduser = req.params;
    const grandparent_id = req.session.user.id;
    const { user } = req.session;
    const picture = await Picture.findAll({ include: Grandparent });

    const likeOfUser = await Like.findAll({
      attributes: ['picture_id'],
      where: { grandparent_id },
      raw: true,
    });

    const arrOfPicturesWhichUserLike = [];
    likeOfUser.forEach((el) =>
      arrOfPicturesWhichUserLike.push(el['picture_id'])
    );

    const filteredPicture = picture.filter(
      (el) => el.Grandparent.login === granduser.name
    );
    render(
      BabushkasPhoto,
      { user, filteredPicture, arrOfPicturesWhichUserLike },
      res
    );

    // console.log('filteredPicture', filteredPicture)
    // console.log('filteredPicture', filteredPicture)
  } catch (error) {
    console.log(error);
  }
};

exports.changeHelp = async (req, res) => {
  const { help } = req.body;
  let answer;
  if (help === 'true') {
    answer = 'false';
  } else {
    answer = 'true';
  }
  const { user } = req.session;
  try {
    const a = await Grandparent.update(
      { help: answer },
      {
        where: {
          id: user.id,
        },
      }
    );
    req.session.user.help = answer;
    res.json({ answer });
  } catch (error) {
    console.log(error);
  }
};
