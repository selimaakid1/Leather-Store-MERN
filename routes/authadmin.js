const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator');

const Admin = require('../models/Admin')

const auth = require('../middleware/auth')
const jwtSecret = 'secret'

// Get the logged in admin
router.get('/', auth, (req, res) => {
    Admin.findById(req.admin.id)
    .then(admin => res.json(admin))
    .catch(err => console.log(err.message))
})

// Login the admin 
router.post('/', [
    check('email', 'Please include a valid email!').isEmail(),
    check('password', 'Password is required!').not().isEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { email, password } = req.body

    Admin.findOne({ email })
        .then(admin => {
            if (!admin) {
                //  Check is admin exists
                return res.json({ msg: "Please Register Before" })
            } else {
                // Compare Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err.message)
                    } else if (isMatch) {
                        const payload = {
                            admin: {
                                id: admin.id
                            }
                        }
                        jwt.sign(payload, jwtSecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })
                    } else {
                        return res.json({ msg: 'Wrong Password' })
                    }

                })
            }
        })
        .catch(err => console.log(err.message))

})

module.exports = router