'use strict';

const utility = require('./../../lib/utility');

class AdminController {
  constructor(adminService) {
    this.adminService = adminService;
    this.getEmployeesToAssignForFeedback = this.getEmployeesToAssignForFeedback.bind(
      this,
    );
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }

  async getEmployeesToAssignForFeedback(req, res) {
    try {
      const employees = await this.adminService.getEmployeesToAssignForFeedbackForAnEmployee(
        req.query,
      );
      return utility.sendResponse(res, employees);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }

  async fetchEmployees(req, res) {
    try {
      const employees = await this.adminService.fetchEmployees(req.query);
      return utility.sendResponse(res, employees);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }
}

module.exports = AdminController;
