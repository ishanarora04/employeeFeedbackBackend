const express = require("express");
const router = express.Router();

const employee = require("./employee");

/**
 *  Employee CRUD
 */

router.get("/employee", employee.get);
router.post("/employee", employee.add);
router.put("/employee", employee.add);
router.delete("/employee", employee.remove);


/**
 * Feedback CRUD
 */


module.exports = router;
