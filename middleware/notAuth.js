const notAuth = (req, res, next) => {
    const { user } = req.session
    if (user) {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = notAuth;