module.exports = (req, res) => {

    let email = ""
    let password = ""
    let firstname = ""
    let lastname = ""
    let tel = ""
    let data = req.flash('data') [0]

    if (typeof data != "undefined") {
        email = data.email
        password = data.password
        firstname = data.firstname
        lastname = data.lastname
        tel = data.tel
    }

    res.render('register', {
        errors: req.flash('validationErrors'),
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        tel: tel
    })
}