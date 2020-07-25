const express = require("express");
const router = express.Router();

const employee = require("./employee");
const feedback = require("./feedback");

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
router.get("/feedback", employee.get);
router.post("/feedback", employee.add);
router.put("/feedback", employee.update);
router.delete("/feedback", employee.remove);




module.exports = router;
