function sendResponse(res, data) {
  return res.send({ status: 200, data: data });
}

function sendErrorResponse(res, error) {
  return res.send({
    status: 201,
    data: [],
    error: error.message || "Some Error Occured",
  });
}


exports.sendResponse = sendResponse;
exports.sendErrorResponse =  sendErrorResponse;