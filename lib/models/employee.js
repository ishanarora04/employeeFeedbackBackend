'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  email: {type: String, unique: true},
  is_deleted: Boolean,
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
