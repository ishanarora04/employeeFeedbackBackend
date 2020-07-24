const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const EmployeeService = require("../routes/employee/employeeService");
const EmployeeDAO = require("../routes/employee/employeeDAO");
const employeeModel = require("../lib/models/employee");

describe("Employee Service", () => {
  let employeeDAO, employeeService;

  before(() => {
    employeeDAO = new EmployeeDAO(employeeModel);
    employeeService = new EmployeeService(employeeDAO);
  });

  it("Should be able to add a new employee", async () => {
    const stub = sinon.stub(employeeDAO, "add").returns({});
    await employeeService.add({});
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
  it("Should be able to view all employees", async () => {
    const stub = sinon.stub(employeeDAO, "get").returns({});
    await employeeService.get({});
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
  it("should be able to update an employee", async () => {
    const stub = sinon.stub(employeeDAO, "update").returns({});
    await employeeService.update(1, {});
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
  it("should be able to remove an employee", async () => {
    const stub = sinon.stub(employeeDAO, "remove");
    await employeeService.remove(1, {});
    stub.restore();
    expect(stub.calledOnce).to.be.true;
  });
});
