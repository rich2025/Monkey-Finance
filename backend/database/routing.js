const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const findOrCreateUser = require('./findCreateNewUser'); // adjust the path as necessary

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Use bodyParser to parse JSON payloads
app.use(bodyParser.json());

// Define your API endpoint
app.post('/api/user', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await findOrCreateUser(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
