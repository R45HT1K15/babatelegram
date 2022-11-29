const render = require('../lib/render');

const Babushkagram = require('../views/Babushkagram');
const BabushkaNewPhoto = require('../views/BabushkaNewPhoto');
const BabushkaPhotoEdit = require('../views/BabushkaPhotoEdit');
const BabushkaProfile = require('../views/BabushkaProfile');

exports.babushkagram = (req, res) => {
    render(Babushkagram, {}, res);
}

exports.babushkaNewPhoto = (req, res) => {
    render(BabushkaNewPhoto, {}, res);
}

exports.babushkaPhotoEdit = (req, res) => {
    render(BabushkaPhotoEdit, {}, res);
}

exports.babushkaProfile = (req, res) => {
    render(BabushkaProfile, {}, res);
}
