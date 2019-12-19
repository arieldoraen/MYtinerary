const User = require("../models/usersModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
process.env.SECRET_KEY ='secret';

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
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null),
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
    var user = "";
    User.findOne({
      email: req.body.email
    }, (err, UserData) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Sv Error'+ err
        });
       }
       if(UserData){
         user = UserData;
         if (!UserData.validPassword(req.body.password)){
          return res.send({
            success: false,
            message: 'Error: Pass incorrecta'
          });
    }
    const payload = {
      _id: user._id,
      name: user.name,
      email: user.email
    }
    console.log(user);
    let token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 1440
      })
      return res.send({
        success: true,
        message: 'Logeado',
        token: token
      });
    } else{
      return res.send({
        success: false,
        message: 'Email incorrecto'
      });
    }
    
    })
    
  },
  deleteUser: async (req, res) => {},
  updateUser: async (req, res) => {},
  verifyLogin: async (req, res) => {
    var decoded = jwt.verify(req.headers["authorization"],process.env.SECRET_KEY, function(err, decoded){
      console.log(err,decoded);
      if(err){
        return res.status(404).send(err);
      }else if(decoded){
         User.findOne({
                    _id:decoded._id
                }).then(user=>{
                    if(user){
                      return res.send({
                        success: true,
                        message: 'validated',
                        data: user
                      });
                    }else{
                      return res.status(404).send({
                        success: false,
                        message: 'Error: Algo malio sal'
                      });
                    }
                }).catch(err=>{
                  return res.send({
                    success: false,
                    message: 'Error: Sv Error'+ err
                  });
                })
      }
      
    })
        
  }
};

module.exports = userController;
