const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const formRoutes = require('./routes/formRoutes');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use('/api', formRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});