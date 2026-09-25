const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('./travlr');

const Trip = mongoose.model('trips');

const dbURI = 'mongodb://127.0.0.1:27017/travlr';

async function seedDatabase() {
  try {
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');

    const dataPath = path.join(__dirname, '..', '..', 'trips.json');
    const trips = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    await Trip.deleteMany({});
    console.log('Existing trips removed');

    await Trip.insertMany(trips);
    console.log(`${trips.length} trips added successfully`);

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (err) {
    console.error('Error seeding database:', err);
    await mongoose.connection.close();
  }
}

seedDatabase();