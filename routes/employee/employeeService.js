'use strict';

class EmployeeService {
  constructor(employeeDAO) {
    this.employeeDAO = employeeDAO;
    this.get = this.get.bind(this);
  }

  async get(params) {
    try {
      const employees = await this.employeeDAO.get(params);
      return employees;
    } catch (e) {
      throw e;
    }
  }

  async add(params) {
    try {
      const output = await this.employeeDAO.add(params);
      return output;
    } catch (e) {
      throw e;
    }
  }

  async update(params) {
    try {
      const id = params._id;
      delete params['_id'];
      await this.employeeDAO.update(id, params);
    } catch (e) {
      throw e;
    }
  }

  async remove(params) {
    try {
      await this.employeeDAO.remove(params._id);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = EmployeeService;
