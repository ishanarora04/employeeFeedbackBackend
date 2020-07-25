const mongoose = require("mongoose");

class EmployeeDAO {
  constructor(Model) {
    this.Model = Model;
  }

  async get(params, projection) {
    params["is_deleted"] = false;
    const employees = this.Model.find(params, projection);
    return employees;
  }

  async add(params) {
    const employee = new this.Model(params);
    const output = await employee.save();
    return output;
  }

  async update(id, params) {
    const updatedEmployee = await this.Model.findByIdAndUpdate(
      mongoose.Types.ObjectId(id),
      params,
      {
        new: true,
      }
    );
    return updatedEmployee;
  }

  async remove(id) {
    const employee = await this.update(id, { is_deleted: true });
    return employee;
  }
}

module.exports = EmployeeDAO;
