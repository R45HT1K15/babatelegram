const render = require('../lib/render')

const Vnukogram = require('../views/Vnukogram');
const Vnukolikes = require('../views/Vnukolikes');
const Vnukoprofile = require('../views/Vnukoprofile');

const { Pictures } = require('../db/models');

exports.vnukogram = async (req, res) => {
    try {
        const pictures = await Pictures.findAll({ order: [['id', 'DESC']]})
        console.log('pictures---------------', pictures)
        render(Vnukogram, { pictures }, res);
    } catch (error) {
        console.log('\x1b[31m', 'SignUp Error', error);
    }
};


exports.vnukolikes = (req, res) => {
    render(Vnukolikes, {}, res);
};

exports.vnukoprofile = (req, res) => {
    render(Vnukoprofile, {}, res);
};
