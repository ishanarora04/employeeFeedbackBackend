'use strict';
const utility = require('./../../lib/utility');

class FeedbackController {
  constructor(feedbackService) {
    this.feedbackService = feedbackService;
    this.get = this.get.bind(this);
    this.add = this.add.bind(this);
    this.update = this.update.bind(this);
    this.getFeedbackRequestsForAnEmployee = this.getFeedbackRequestsForAnEmployee.bind(this);
  }

  async get(req, res) {
    try {
      const params = req.query;
      const output = await this.feedbackService.get(params);
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }

  async add(req, res) {
    try {
      const params = req.body;
      const output = await this.feedbackService.add(params);
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }

  async update(req, res) {
    try {
      const params = req.body;
      const output = await this.feedbackService.update(params);
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }

  async getFeedbackRequestsForAnEmployee(req, res) {
    try {
      const params = req.query;
      const _id = params._id;
      const output = await this.feedbackService.getFeedbackRequestsForAnEmployee(
        _id,
      );
      return utility.sendResponse(res, output);
    } catch (e) {
      console.error(e);
      return utility.sendErrorResponse(res, e);
    }
  }
}

module.exports = FeedbackController;
