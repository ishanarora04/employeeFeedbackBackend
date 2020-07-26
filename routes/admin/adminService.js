const employeeController = require("../employee");
const mongoose = require("mongoose");
const utility = require("../../lib/utility");
const { util } = require("chai");
const feedbackController = require("../feedback");

class AdminService {
  constructor(feedbackService, employeeService) {
    this.feedbackService = feedbackService;
    this.employeeService = employeeService;
  }

  async getEmployeesToAssignForFeedbackForAnEmployee(params) {
    try {

      const current_employee_id = mongoose.Types.ObjectId(params.emp_id);
      const alreadyAssignedEmployees = await this.feedbackService.get(
        { from: mongoose.Types.ObjectId(params.emp_id) },
        { to: 1 }
      );

      const employeeIds = [];

      for (const elem of alreadyAssignedEmployees) {
        employeeIds.push(elem.to._id);
      }

      employeeIds.push(current_employee_id);
      const remainingEmployees = await this.employeeService.get({
        _id: { $nin: employeeIds },
      });

      return remainingEmployees;
    } catch (e) {
      throw e;
    }
  }

  async fetchEmployees(params) {
    try {
      const admin_id = utility.admin_id;
      const employees = await this.employeeService.get({});

      const feedback = await this.feedbackService.get(
        { from: mongoose.Types.ObjectId(admin_id) },
        { to: 1, feedback: 1 }
      );

      console.log(feedback);

      const dictionary = {};
      for (const elem of feedback) {
        dictionary[elem["to"]._id] = elem["feedback"];
      }

      for (let employee of employees) {
        employee["feedback"] = "No feedback given";
        if (employee._id in dictionary) {
          employee['feedback'] = dictionary[employee._id];
        }
      }

      return employees;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}

module.exports = AdminService;
