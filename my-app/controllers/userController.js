const User = require("../models/usersModel");

const userController = {
  register: async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var profile_picture = req.body.img || "";

    const newUser = new User({
      name: name,
      email: email,
      password: password,
      profile_picture: profile_picture
    });
  },
  login: async (req, res) => {},
  deleteUser: async (req, res) => {},
  updateUser: async (req, res) => {}
};

module.exports = userController;
