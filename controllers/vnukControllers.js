const render = require('../lib/render')

const Vnukogram = require('../views/Vnukogram');
const Vnukolikes = require('../views/Vnukolikes');
const Vnukoprofile = require('../views/Vnukoprofile');

exports.vnukogram = (req, res) => {
    render(Vnukogram, {}, res);
};

exports.vnukolikes = (req, res) => {
    render(Vnukolikes, {}, res);
};

exports.vnukoprofile = (req, res) => {
    render(Vnukoprofile, {}, res);
};
