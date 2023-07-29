const router = require('express').Router()
const authController = require('../controller/authController')
const use = require('../helpers/asyncWrapper')

// const use = fn => (req, res, next) => {
//     Promise.resolve(fn(req, res, next)).catch(err => next(err))
// }

router.post('/signup', use(authController.signUp))
router.post('/signin', use(authController.signIn))

module.exports = router