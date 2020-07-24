const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const mongoose = require("mongoose");
const faker = require("faker");

const EmployeeDAO = require("../routes/employee/employeeDAO");
const employeeModel = require("../lib/models/employee");
const employeeController = require("../routes/employee");
mongoose.connect(
  "mongodb://ishanarora:ishanarora1@ds133353.mlab.com:33353/employee_feedback_test",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

describe("Employee DAO", () => {
  employeeDAO = new EmployeeDAO(employeeModel);

  let employee;

  beforeEach(async () => {
    const name = faker.name.findName();
    const emp = new employeeModel({ name: name, is_deleted: false });
    employee = await emp.save();
  });

  it("should be able to add an employee", async () => {
    const name = faker.name.findName();
    const employee = { name: name, is_deleted: false };
    const output = await employeeDAO.add(employee);
    expect(output.name).to.equal(name);
    await employeeDAO.remove(output._id);
  });

  it("should be able to update an employee", async () => {
    const name = faker.name.findName();
    const updatedEmployee = await employeeDAO.update(employee._id, {
      name: name,
      is_deleted: employee.is_deleted,
    });
    expect(updatedEmployee.name).to.equals(name);
  });

  it("should be able to delete an employee", async () => {
    const employeeDeleted = await employeeDAO.remove(employee._id);
    expect(employeeDeleted.is_deleted).to.be.true;
  });

  it("should be able to get all non-deleted employees", async () => {
    const employees = await employeeDAO.get({});
    expect(employees[0].is_deleted).to.be.false;
  });

  after(async () => {
    await mongoose.connection.dropCollection(employeeModel.collection.name);
    await mongoose.connection.close();
  });
});
