
const express = require('express')
const locationsController = require('../controllers/locations')
const router = express.Router()

router.get('/', locationsController.getAllUsers)

router.get('/:id', locationsController.getUserById)

router.post('/', locationsController.createUser)



module.exports = router