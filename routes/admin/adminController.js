class AdminController {
  constructor(adminService) {
    this.adminService = adminService;
  }

  async getEmployeesToAssignForFeedback(req, res) {
    try {
      const employees = await this.adminService.getEmployeesToAssignForFeedback(
        req.params
      );
      return employees;
    } catch (e) {}
  }
}

module.exports = AdminController;
