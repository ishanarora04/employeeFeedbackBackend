class AdminController {
  constructor(adminService) {
    this.adminService = adminService;
  }

  async getEmployeesToAssignForFeedback(req, res) {
    const employees = await this.adminService.getEmployeesToAssignForFeedback(
      req.params
    );
    return employees;
  }
}
