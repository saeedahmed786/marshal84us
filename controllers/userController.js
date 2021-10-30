const User = require('../models/userModel');
var bcrypt = require('bcryptjs');
const config = require('../config/keys');
const jwt = require('jsonwebtoken');

exports.getUserById = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (user) {
    res.status(200).json(user);
  }
  else {
    res.status(404).json({ errorMessage: 'No user found!' });
  }
}

exports.signUp = async (req, res) => {
  console.log(req.body.password);
  const ifEmailAlreadyPresent = await User.findOne({ email: req.body.email });
  if (ifEmailAlreadyPresent) {
    res.status(201).json({ errorMessage: 'Email already exists. Please try another one.' });
  }
  else {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });

    const saveUser = await user.save();
    if (saveUser) {
      res.status(200).json({ successMessage: 'Account created successfuly!. Please Sign in.' });
    } else {
      res.status(400).json({ errorMessage: 'Account not created. Please try again' });
    }
  }
}


exports.login = async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });
  if (findUser) {
    const checkPassword = bcrypt.compareSync(req.body.password, findUser.password);
    if (checkPassword) {
      const payload = {
        user: {
          _id: findUser._id,
          role: findUser.role
        }
      }
      jwt.sign(payload, config.jwtSecret, (err, token) => {
        if (err) res.status(400).json({ errorMessage: 'Jwt Error' })

        const { _id, name, role, email } = findUser;
        res.status(200).json({
          _id,
          user: {
            role,
            name,
            email
          },
          token,
          successMessage: 'Logged In Successfully',

        });
      });
    } else {
      res.status(201).json({ errorMessage: 'Incorrect username or password.' })
    }

  } else {
    res.status(201).json({ errorMessage: 'Incorrect username or password.' })
  }
}
