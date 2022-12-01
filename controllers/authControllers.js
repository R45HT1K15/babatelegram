const { default: regenerator } = require('@babel/preset-env/lib/polyfills/regenerator');
const bcrypt = require('bcrypt');
const { Grandparent, Grandchild } = require('../db/models');
const render = require('../lib/render');
const Index = require('../views/Index');
const Signin = require('../views/Signin');
const Signup = require('../views/Signup');
// const Error = require('../views/Error');

const failAuth = (res, err) => {
  res.status(401);
  return render(Error, { error: err }, res);
};

const createUserAndSession = async (req, res) => {
  const { fio, login, password, role } = req.body;
  try {
    if (role === 'babushkagram') {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await Grandparent.create({ fio, login, password: hashedPassword, help: true });
      req.session.user = { id: user.id, name: user.fio, role };
      req.session.save(() => {
        res.redirect('/babushkagram');
      })
    };
    if (role === 'vnukogram') {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await Grandchild.create({ fio, login, password: hashedPassword });
      req.session.user = { id: user.id, name: user.fio, role };
      req.session.save(() => {
        res.redirect('/vnukogram'); // сделать редирект vnukogram
      })
    };
  } catch (error) {
    console.log(error)
    render(Signup, { error }, res);
  }
};

const checkUserAndCreateSession = async (req, res) => {
  const { login, password, role } = req.body;
  try {
    if (role === 'babushkagram') {
      const findBabushka = await Grandparent.findOne({ where: { login }})
      const isPasswValid = await bcrypt.compare(password, findBabushka.password);
      if (isPasswValid) {
        req.session.user = { id: findBabushka.id, name: findBabushka.name, role, fio:findBabushka.fio }; 
        req.session.save(() => {
          res.redirect('/babushkagram');
        })
      }
      else {
        throw new Error()
      }
    }
    if (role === 'vnukogram') {
      const findVnuk = await Grandchild.findOne({ where: { login }})
      console.log('findVnuk ------------------------------', findVnuk)
      const isPasswValid = await bcrypt.compare(password, findVnuk.password);
      if (isPasswValid) {
        req.session.user = { id: findVnuk.id, name: findVnuk.fio, role, fio:findVnuk.fio}; 
        req.session.save(() => {
          res.redirect('/vnukogram'); // сделать редирект vnukogram
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
