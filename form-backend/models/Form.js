const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  age: Number,
  class: String,
  subject: String,
  bloodGroup: String,
  religion: String,
  caste: String,
  dalitChristian: Boolean,
  fatherName: String,
  parentOccupation: String,
  parentAddress: String,
  parentMobileNo: String,
  studentMobileNo: String,
  pincode: String,
  previousSchool: String,
  residentLastYear: Boolean,
  previousHostelName: String,
  previousHostelPlace: String,
  imagePath: String
}, { timestamps: true });

module.exports = mongoose.model('Form', formSchema);