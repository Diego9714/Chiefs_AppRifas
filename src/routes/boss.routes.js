const { REGISTER_BOSS , EDIT_BOSS , DELETE_BOSS , GET_ADMINS } = require('../global/_var.js')

// Dependencies
const express = require('express')
const router = express.Router()

// Controllers
const dataController = require('../controllers/getInfo.controller.js')
const saveController = require('../controllers/saveInfo.controller.js')

// Routes
router.get(GET_ADMINS , dataController.getAdmins)

router.post(REGISTER_BOSS , saveController.regBoss)

router.post(EDIT_BOSS , saveController.editBoss)

router.post(DELETE_BOSS , saveController.deleteBoss)

module.exports = router