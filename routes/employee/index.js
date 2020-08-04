'use strict';

const employeeModel = require('./../../lib/models/employee'); // MONGO DB
const EmployeeController = require('./employeeController');
const EmployeeService = require('./employeeService');
const EmployeeDAO = require('./employeeDAO'); //

const employeeDAO = new EmployeeDAO(employeeModel);
const employeeService = new EmployeeService(employeeDAO);
const employeeController = new EmployeeController(employeeService);

module.exports = employeeController;
