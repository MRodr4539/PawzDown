const express = require('express')
const router = express.Router()
const {list, show, create, remove} = require('./controllers');

router.get('/locationList', list)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', replace)
router.delete('/:id', remove)


// const express = require('express')
// const usersController = require('../controllers/users')
// const router = express.Router()

// router.get('/', usersController.getAllUsers)

// router.get('/:id', usersController.getUserById)

// router.post('/', usersController.createUser)

// router.put('/:id', usersController.updateUserById)

// router.delete('/:first_name', usersController.deleteUserByFirstName)

// module.exports = router