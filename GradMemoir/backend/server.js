const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 5001; // Changed from 5000 to 5001

// Enable CORS for all origins
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Define test route
app.get('/', (req, res) => {
    res.send('Backend server is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

mongoose.connect('mongodb://localhost:27017/gradmemoir')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
