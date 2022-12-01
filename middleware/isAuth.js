const isAuth = (req, res, next) => {
    const { user } = req.session;
    if (user) {
        if (user.role === 'babushkagram') {
            res.redirect('/babushkagram')
        }
        if(user.role === 'vnukogram') {
            res.redirect('/vnukogram')
        }
    } else {
        next()
    }
}

module.exports = isAuth;