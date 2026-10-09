
const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /api/trips
// Return all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET: /api/trips/:tripCode
// Return one trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      code: req.params.tripCode
    }).exec();

    if (!trip) {
      return res.status(404).json({
        message: `Trip with code ${req.params.tripCode} not found`
      });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// POST: /api/trips
// Create a new trip
const tripsAddTrip = async (req, res) => {
  try {
    const existingTrip = await Trip.findOne({
      code: req.body.code
    }).exec();

    if (existingTrip) {
      return res.status(409).json({
        message: 'A trip with this code already exists'
      });
    }

    const trip = await Trip.create(req.body);

    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// PUT: /api/trips/:tripCode
// Update an existing trip
const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      code: req.params.tripCode
    }).exec();

    if (!trip) {
      return res.status(404).json({
        message: `Trip with code ${req.params.tripCode} not found`
      });
    }

    trip.name = req.body.name ?? trip.name;
    trip.length = req.body.length ?? trip.length;
    trip.start = req.body.start ?? trip.start;
    trip.resort = req.body.resort ?? trip.resort;
    trip.perPerson = req.body.perPerson ?? trip.perPerson;
    trip.image = req.body.image ?? trip.image;
    trip.description = req.body.description ?? trip.description;

    await trip.save();

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// DELETE: /api/trips/:tripCode
// Delete an existing trip
const tripsDeleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({
      code: req.params.tripCode
    }).exec();

    if (!trip) {
      return res.status(404).json({
        message: `Trip with code ${req.params.tripCode} not found`
      });
    }

    return res.status(200).json({
      message: 'Trip deleted successfully'
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
