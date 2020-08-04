'use strict';

const employeeModel = require('./../../lib/models/employee');
const EmployeeService = require('./../employee/employeeService');
const EmployeeDAO = require('./../employee/employeeDAO');

const employeeDAO = new EmployeeDAO(employeeModel);
const employeeService = new EmployeeService(employeeDAO);

const feedbackModel = require('./../../lib/models/feedback');
const FeedbackService = require('./../feedback/feedbackService');
const FeedbackDAO = require('./../feedback/feedbackDAO');

const feedbackDAO = new FeedbackDAO(feedbackModel);
const feedbackService = new FeedbackService(feedbackDAO);

const AdminService = require('./adminService');
const AdminController = require('./adminController');

const adminService = new AdminService(feedbackService, employeeService);


const adminController = new AdminController(adminService);

module.exports = adminController;
