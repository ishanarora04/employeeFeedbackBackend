const mongoose = require("mongoose");

class EmployeeDAO {
  constructor(Model) {
    this.Model = Model;
  }

  async get(params, projection) {
    try {
      params["is_deleted"] = false;
      const employees = this.Model.find(params, projection);
      return employees;
    } catch (e) {
      throw e;
    }
  }

  async add(params) {
    try {
      console.log(params);
      const employee = new this.Model(params);
      const output = await employee.save();
      return output;
    } catch (e) {
      throw e;
    }
  }

  async update(id, params) {
    try {
      const updatedEmployee = await this.Model.findByIdAndUpdate(
        mongoose.Types.ObjectId(id),
        params,
        {
          new: true,
        }
      );
      return updatedEmployee;
    } catch (e) {
      throw e;
    }
  }

  async remove(id) {
    try {
      const employee = await this.update(id, { is_deleted: true });
      return employee;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = EmployeeDAO;
