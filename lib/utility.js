'use strict';

function sendResponse(res, data) {
  return res.send({status: 200, message: 'Operation Successful', data: data});
}

function sendErrorResponse(res, error) {
  return res.send({
    status: 201,
    data: [],
    message: error.message || 'Some Error Occured',
  });
}

exports.admin_id = '5f1d6c1321c54464a647fbc8'; // Admin

exports.sendResponse = sendResponse;
exports.sendErrorResponse = sendErrorResponse;
