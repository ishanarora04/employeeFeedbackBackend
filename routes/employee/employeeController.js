class EmployeeController {
  constructor(employeeService) {
    this.employeeService = employeeService;
  }

  async get(req, res) {
    try {
      const params = req.query;
      const output = this.employeeService.get(params);
      res.send(output);
    } catch (e) {}
  }

  async add(req, res) {
    try {
      const params = req.params;
      const output = this.employeeService.add(params);
      res.send(output);
    } catch (e) {}
  }

  async update(req, res) {
    try {
      const params = req.params;
      const output = this.employeeService.update(params);
      res.send(output);
    } catch (e) {}
  }

  async remove(req, res) {
    try {
      const params = req.params;
      const output = this.employeeService.remove(params);
      res.send(output);
    } catch (e) {}
  }
}

module.exports = EmployeeController;
