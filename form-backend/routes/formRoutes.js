const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// const Form = require('form-backend\models\Form.js');
const Form = require('../models/Form');
const { log } = require('console');

const storage = multer.diskStorage({
  destination: function (req, file, cb) { 
    cb(null, 'uploads/')   
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

router.post('/submit-form', upload.single('image'), async (req, res) => {
  try {
    const formData = new Form({
      ...req.body,
      imagePath: req.file ? req.file.path : null
    });
    await formData.save();
    res.status(201).send({ message: 'Form data saved successfully' });
  } catch (error) {
    console.log(error.message );
    res.status(400).send({ message: err.response.data.message, error: error.message });
  }
});

module.exports = router;