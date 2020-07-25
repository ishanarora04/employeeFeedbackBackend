const express = require("express");
const router = express.Router();

const employee = require("./employee");
const feedback = require("./feedback");
const admin = require("./admin");

/**
 *Employee CRUD
 */

router.get("/employee", employee.get);
router.post("/employee", employee.add);
router.put("/employee", employee.update);
router.delete("/employee", employee.remove);
/**
 * Feedback CRUD
 */
router.get("/feedback", feedback.get);
router.get("/feedbackForAnEmployee", feedback.getFeedbackRequestsForAnEmployee);
router.post("/feedback", feedback.add);
router.put("/feedback", feedback.update);

/**
 *
 *
 */

router.get("/fetchEmployeesToAssign", admin.getEmployeesToAssignForFeedback);

module.exports = router;
