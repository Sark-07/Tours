const user = require('../model/users')
const { hassPassword, comparePassword } = require('../helpers/authHelper')
const jwt = require('jsonwebtoken')



// Sign Up logic
const signUp = async (req, res) => {

    const { email, name, phone, password } = req.body
    if (email && name && phone && password) {

        // check existing users
        const findUser = await user.findOne({ email: email })

        if (findUser) {
            return res.status(400).json({ message: 'User already exists.' })
        }

        const hassedPass = await hassPassword(password)

        const payload = {
            name: name,
            phone: phone,
            email: email,
            password: hassedPass
        }

        const newUser = await user.create(payload)


        res.status(201).json({ success: true, message: 'User signed up.' })

    }

}



// Sign In Logic


const signIn = async (req, res) => {


    const { email, password } = req.body

    const findUser = await user.findOne({ email: email })
    if (!findUser) {

        return res.status(404).json({ message: 'Email not registered.' })
    }

    const match = await comparePassword(password, findUser.password)

    if (!match) {
        return res.status(404).json({ message: 'Wrong password.' })
    }

    const token = jwt.sign({ _id: findUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

    res.cookie(findUser.email, token, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true
    })

    res.status(201).json({ success: true, message: 'User signed in.', user: { id: findUser._id, name: findUser.name, email: findUser.email, phone: findUser.phone }, token })


}

module.exports = { signUp, signIn }