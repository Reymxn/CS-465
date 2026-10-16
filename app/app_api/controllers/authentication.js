
const mongoose = require('mongoose');

const User = mongoose.model('users');

// Register a new administrator
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }

  try {
    const existingUser = await User.findOne({
      email: email.toLowerCase().trim()
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Email is already registered'
      });
    }

    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim()
    });

    user.setPassword(password);
    await user.save();

    return res.status(201).json({
      token: user.generateJwt()
    });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({
      message: 'Unable to register user'
    });
  }
};

// Log in an existing administrator
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Email and password are required'
    });
  }

  try {
    const user = await User.findOne({
      email: email.toLowerCase().trim()
    });

    if (!user || !user.validPassword(password)) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }

    return res.status(200).json({
      token: user.generateJwt()
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({
      message: 'Unable to log in'
    });
  }
};

module.exports = {
  register,
  login
};
