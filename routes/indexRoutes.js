const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Signup = require('../views/Signup');
const Signin = require('../views/Signin');
const Index = require('../views/Index');
const {
  createUserAndSession,
  checkUserAndCreateSession,
  exitAndDestroySession
} = require('../controllers/authControllers');

const isAuth = require('../middleware/isAuth')


route.get('/', isAuth, (req, res) => {
  const  { user } = req.session
  render(Index, { user }, res)
})

route.post('/signup', createUserAndSession);

route.post('/signin', checkUserAndCreateSession);

route.get('/signup', (req, res) => {
  render(Signup, {}, res)
})

route.get('/signin', (req, res) => {
    render(Signin, {}, res)
})

route.get('/logout', exitAndDestroySession)
module.exports = route;
