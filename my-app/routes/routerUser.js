const express = require('express')
const userController = require("../controllers/userController")
const router = express.Router()
const cors=require('cors');

router.use(cors())

router.route('/login')
  .post(userController.login)
router.route('/register')
  .post(userController.register)
router.route('/user')
  .get(userController.verifyLogin)
  

  module.exports=router;