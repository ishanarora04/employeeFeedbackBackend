const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: String,
  email: String,
  is_deleted: { type: Boolean, default: false },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
