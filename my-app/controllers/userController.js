const User = require("../models/usersModel");
const UserSession = require("../models/UserSession");

const userController = {
  register: async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var profile_picture = req.body.img || "";

    User.find({
      email: email
    }, (err, prevUser) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Sv Error'+ err
        });
      } else if(prevUser.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Email Registrado'
        });
      }
    })

    const newUser = new User({
      name: name,
      email: email,
      password: newUser.generateHash(password),
      profile_picture: profile_picture
    });
    newUser.save((err, user) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Sv error'+err
        });
      }
      return res.send({
        success: true,
        message: 'Registrado'
      });
    });
  },
  login: async (req, res) => {
    User.find({
      email: req.body.email
    }, (err, UserData) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Sv Error'+ err
        });
      } else if(UserData.length != 1) {
        return res.send({ 
          success: false,
          message: 'Error: Algo malio sal'
        });  
      }
    })
    const user = UserData[0];
    if (user.validPassword(req.body.password)){
      return res.send({
        success: false,
        message: 'Error: Pass incorrecta'
      });
    }
    new userSession = new UserSession();
    userSession.userId = user._id;
    userSession.save((err, data) => {
      if(err) {
        return res.send({
          success: false,
          message: 'Error: Sv error'+err
        });
      }
      return res.send({
        success: true,
        message: 'Logeado',
        token: document._id
      });
    });
  },
  deleteUser: async (req, res) => {},
  updateUser: async (req, res) => {},
  verify: async (req,res) => {

  }
};

module.exports = userController;
