const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const EmployeeController = require("../routes/employee/employeeController");
const EmployeeService = require("../routes/employee/employeeService");
const EmployeeDAO = require("../routes/employee/employeeDAO");
const employeeModel = require("../lib/models/employee");

describe("Employee Controller", () => {
  let employeeController, employeeDAO, employeeService;

  const res = {
    send: function () {},
  };

  before(() => {
    employeeDAO = new EmployeeDAO(employeeModel);
    employeeService = new EmployeeService(employeeDAO);
    employeeController = new EmployeeController(employeeService);
  });

  it("Should be able to add a new employee", async () => {
    const stub = sinon.stub(employeeService, "add");
    await employeeController.add({ query: {} }, res);
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
  it("Should be able to view all employees", async () => {
    const stub = sinon.stub(employeeService, "get");
    await employeeController.get({ params: {} }, res);
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
  it("should be able to update an employee", async () => {
    const stub = sinon.stub(employeeService, "update");
    await employeeController.update({ params: {} }, res);
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
  it("should be able to remove an employee", async () => {
    const stub = sinon.stub(employeeService, "remove");
    await employeeController.remove({ params: {} }, res);
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
});
