const employeeModel = require("./../../lib/models/employee");
const EmployeeController = require("./employeeController");
const EmployeeService = require("./employeeService");
const EmployeeDAO = require("./employeeDAO");

const employeeDAO = new EmployeeDAO(employeeModel);
const employeeService = new EmployeeService(employeeModel);
const employeeController = new EmployeeController(employeeService);

module.exports = employeeController;
