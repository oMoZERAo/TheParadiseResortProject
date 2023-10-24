const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {

    let id = req.params.id

    User.findOne({ _id: id }).then((user) => {
        console.log(user)

        if(user) {
            let cmp = bcrypt.compare(req.body.password, user.password).then( async (match) => {
                if(match) {
                    try {
                        const updated = await User.findOneAndUpdate({ _id: id}, { 
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            tel: req.body.tel
                        }, {new: true}).exec()
                
                        res.redirect('/account?alert=Info+Updated!')
                
                    } catch (err) {
                        console.log(err)
                        res.status(500).send('Server Error')
                    }
                } else {
                    res.redirect('/account?alert=Incorrect+Password!!')
                }
            })
        } else {
            res.redirect('/login')
        }
    })

    
}