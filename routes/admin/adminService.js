const employeeController = require("../employee");
const mongoose = require("mongoose");
const _ = require("lodash");

class AdminService {
  constructor(feedbackService, employeeService) {
    this.feedbackService = feedbackService;
    this.employeeService = employeeService;
  }

  async getEmployeesToAssignForFeedbackForAnEmployee(params) {
    const current_employee_id = mongoose.Types.ObjectId(params.emp_id);
    const alreadyAssignedEmployees = await this.feedbackService.get(
      { to: mongoose.Types.ObjectId(params.emp_id) },
      { from: 1 }
    );

    const employeeIds = [];
    for (const elem of alreadyAssignedEmployees) {
      employeeIds.push(elem.from);
    }

    employeeIds.push(current_employee_id);
    const remainingEmployees = await this.employeeService.get({
      _id: { $nin: employeeIds },
    });

    return remainingEmployees;
  }
}

module.exports = AdminService;
