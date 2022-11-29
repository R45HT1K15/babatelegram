const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Signup = require('../views/Signup');
const Signin = require('../views/Signin');
const Index = require('../views/Index');


route.get('/', (req, res) => {
  render(Index, {}, res)
})

route.get('/signup', (req, res) => {
  render(Signup, {}, res)
})

route.get('/signin', (req, res) => {
    render(Signin, {}, res)
})

module.exports = route;
