const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a user model with mongoose or define the schema
const User = mongoose.model('User', {
  userId: Number,
  name: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
});

// Find the nearest users to a given location
app.get('/nearest-users', async (req, res) => {
  const { latitude, longitude } = req.query;

  // const maxDistance = 10000; // Max distance in meters

  // Perform a geospatial query to find nearby users
  const nearestUsers = await User.find({
    location: {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: [parseFloat(longitude), parseFloat(latitude)],
        },
        // $maxDistance: maxDistance,
      },
    },
  });

  res.json(nearestUsers);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
