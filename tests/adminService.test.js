'use strict';

const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');

const EmployeeService = require('../routes/employee/employeeService');
const EmployeeDAO = require('../routes/employee/employeeDAO');
const EmployeeModel = require('../lib/models/employee');

const FeedbackService = require('../routes/feedback/feedbackService');
const FeedbackDAO = require('../routes/feedback/feedbackDAO');
const FeedbackModel = require('../lib/models/feedback');

const AdminService = require('../routes/admin/adminService');
mongoose.connect(
  'mongodb://ishanarora:ishanarora1@ds133353.mlab.com:33353/employee_feedback_test',
  {useUnifiedTopology: true, useNewUrlParser: true},
);

describe('Admin Service', async() => {
  const employeeDAO = new EmployeeDAO(EmployeeModel);
  const feedbackDAO = new FeedbackDAO(FeedbackModel);

  const employeeService = new EmployeeService(employeeDAO);
  const feedbackService = new FeedbackService(feedbackDAO);

  const adminService = new AdminService(feedbackService, employeeService);

  let emp1, emp2, emp3, feedback1;

  before(async() => {
    emp1 = new EmployeeModel({name: 'Amy', email: 'amy@mailme.com', is_deleted: false});
    emp2 = new EmployeeModel({name: 'Bob', email: 'bob@mailme.com', is_deleted: false});
    emp3 = new EmployeeModel({name: 'Carry', email: 'carry@mailme.com', is_deleted: false});
    await emp1.save();
    await emp2.save();
    await emp3.save();

    feedback1 = new FeedbackModel({from: emp1, to: emp2, is_deleted: false});
    await feedback1.save();
  });

  it('Should fetch remaining employees which are not assigned to ', async() => {
    const remainingEmployees = await adminService.getEmployeesToAssignForFeedbackForAnEmployee(
      {emp_id: emp2._id},
    );
    expect(remainingEmployees[0].name).equal(emp3.name);
  });

  after(async() => {
    await mongoose.connection.dropCollection(FeedbackModel.collection.name);
    await mongoose.connection.dropCollection(EmployeeModel.collection.name);
  });
});
