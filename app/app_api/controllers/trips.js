const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /api/trips
// Returns all trips from MongoDB as JSON
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).exec();

    if (!trips) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET: /api/trips/:tripCode
// Returns a single trip based on its trip code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();

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

module.exports = {
  tripsList,
  tripsFindByCode
};