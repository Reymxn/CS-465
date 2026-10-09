
const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// GET all trips and POST a new trip
router
  .route('/trips')
  .get(ctrlTrips.tripsList)
  .post(ctrlTrips.tripsAddTrip);

// GET, PUT, and DELETE a trip by its code
router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode)
  .put(ctrlTrips.tripsUpdateTrip)
  .delete(ctrlTrips.tripsDeleteTrip);

module.exports = router;
