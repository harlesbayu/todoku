const router = require('express').Router()
const Controller = require('../controllers/userController')

router.post('/signup', Controller.signup)
router.post('/signin', Controller.signin)
router.post('/signinGoogle', Controller.signinGoogle)
// routes.put('/update/:id', update)
// routes.delete('/delete/:id', remove)

module.exports = router