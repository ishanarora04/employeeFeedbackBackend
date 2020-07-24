const express = require("express");
const router = express.Router();

const employee = require("./employee");

/**
 *  Employee CRUD
 */

router.get("/employee", employee.get);

module.exports = router;
