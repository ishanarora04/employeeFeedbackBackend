const utility = require("./../../lib/utility");

class EmployeeController {
  constructor(employeeService) {
    this.employeeService = employeeService;
    this.get = this.get.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async get(req, res) {
    try {
      const params = req.query;
      const output = this.employeeService.get(params);
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }

  async add(req, res) {
    try {
      const params = req.params;
      const output = this.employeeService.add(params);
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }

  async update(req, res) {
    try {
      const params = req.params;
      const output = this.employeeService.update(params);
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }

  async remove(req, res) {
    try {
      const params = req.params;
      const output = this.employeeService.remove(params);
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }
}

module.exports = EmployeeController;
