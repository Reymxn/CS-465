
const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const ctrlAuth = require('../controllers/authentication');
const jwt = require('jsonwebtoken');

// Verify JWT before allowing changes to trips
const requireAuth = (req, res, next) => {
  const authorization = req.headers.authorization || '';
  const match = authorization.match(/^Bearer (.+)$/i);

  if (!match) {
    return res.status(401).json({
      message: 'Authentication token required'
    });
  }

  try {
    req.auth = jwt.verify(match[1], process.env.JWT_SECRET);
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid or expired authentication token'
    });
  }
};

// Authentication endpoints
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// View trips without logging in
router
  .route('/trips')
  .get(ctrlTrips.tripsList)
  .post(requireAuth, ctrlTrips.tripsAddTrip);

// View individual trips and protect modifications
router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode)
  .put(requireAuth, ctrlTrips.tripsUpdateTrip)
  .delete(requireAuth, ctrlTrips.tripsDeleteTrip);

module.exports = router;
