class EmployeeService {
  constructor(employeeDAO) {
    this.employeeDAO = employeeDAO;
  }

  async get(params) {
    const employees = await this.employeeDAO.get(params);
    return employees;
  }

  async add(params) {
    const output = await this.employeeDAO.add(params);
    return output;
  }

  async update(params) {
    const id = params._id;
    delete params["_id"];
    await this.employeeDAO.update(id, params);
  }

  async remove(params) {
    await this.employeeDAO.remove(params);
  }
}

module.exports = EmployeeService;
