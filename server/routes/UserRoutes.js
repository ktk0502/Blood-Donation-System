const express = require("express")
const userController = require('../controllers/userController')
const router = express.Router();
router.route('/register').post(userController.register)
router.route('/imageupload').post(userController.uploadImg, userController.uploadImage)
router.route('/click-from-mail/:donerEmail/:patientEmail').get(userController.clickFromMail)

module.exports = router;