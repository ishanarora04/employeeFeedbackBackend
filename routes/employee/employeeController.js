class EmployeeController {
  constructor(employeeService) {
    this.employeeService = employeeService;
  }

  async get(req, res) {
    const params = req.query;
    const output = this.employeeService.get(params);
    res.send(output);
  }

  async add(req, res) {
    const params = req.params;
    const output = this.employeeService.add(params);
    res.send(output);
  }

  async update(req, res) {
    const params = req.params;
    const output = this.employeeService.update(params);
    res.send(output);
  }

  async remove(req, res) {
    const params = req.params;
    const output = this.employeeService.remove(params);
    res.send(output);
  }
}

module.exports = EmployeeController;
