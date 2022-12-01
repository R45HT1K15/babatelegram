//подключение bcrypt для скрытия пароля
const bcrypt = require('bcrypt');
//подключение моделей
const { Grandparent, Grandchild } = require('../db/models');
//подключение отрисовки страницы
const render = require('../lib/render');
//подключение вьюшек
const Signin = require('../views/Signin');
const Signup = require('../views/Signup');

//создание в базе данных пользователя и сессии
const createUserAndSession = async (req, res) => {
  //из req.body забираем все данные, которые прописывали в инпутах
  const { fio, login, password, role } = req.body;
  try {
    if (role === 'babushkagram') {
      //создание пароля
      const hashedPassword = await bcrypt.hash(password, 10);
      //cоздание в бд пользователя
      const user = await Grandparent.create({ fio, login, password: hashedPassword, help: true });
      //создание сессии с данными: id, name, role
      req.session.user = { id: user.id, name: user.fio, role };
      req.session.save(() => {
        res.redirect('/babushkagram');
      })
    };
    //тоже самое для внука
    if (role === 'vnukogram') {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await Grandchild.create({ fio, login, password: hashedPassword });
      req.session.user = { id: user.id, name: user.fio, role };
      req.session.save(() => {
        res.redirect('/vnukogram');
      })
    };
  } catch (error) {
    console.log(error)
    render(Signup, { error }, res);
  }
};
//вход пользователя
const checkUserAndCreateSession = async (req, res) => {
  //из инпутов забираем лог, пасс и роль
  const { login, password, role } = req.body;
  try {
    if (role === 'babushkagram') {
      //находим пользователя с таким логином
      const findBabushka = await Grandparent.findOne({ where: { login }})
      //находим пользователя с таким паролем
      const isPasswValid = await bcrypt.compare(password, findBabushka.password);
      if (isPasswValid) {
        //создание сессии
        req.session.user = { id: findBabushka.id, role, name:findBabushka.fio }; 
        req.session.save(() => {
          res.redirect('/babushkagram');
        })
      }
      else {
        throw new Error()
      }
    }
    //тоже самое для внука
    if (role === 'vnukogram') {
      const findVnuk = await Grandchild.findOne({ where: { login }})
      console.log('findVnuk ------------------------------', findVnuk)
      const isPasswValid = await bcrypt.compare(password, findVnuk.password);
      if (isPasswValid) {

        req.session.user = { id: findVnuk.id, name: findVnuk.fio, role, fio:findVnuk.fio}; 
        req.session.save(() => {
          res.redirect('/vnukogram');
        })
      }
      else {
        throw new Error()
      }
    }
  }
   catch (error) {
    console.log(error);
    render(Signin, {error}, res)
  }
}

//выход и удаление сессии
const exitAndDestroySession = (req, res) => {
  req.session.destroy(()=> {
    res.clearCookie('bearCookie');
    res.redirect('/');
  })
}

module.exports = {
  createUserAndSession,
  checkUserAndCreateSession,
  exitAndDestroySession
};
