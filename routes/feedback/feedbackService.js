const mongoose = require("mongoose");

class FeedbackService {
  constructor(feedbackDAO) {
    this.feedbackDAO = feedbackDAO;
  }

  async get(params, projection) {
    try {
      const feedbacks = await this.feedbackDAO.get(params, projection);
      return feedbacks;
    } catch (e) {
      throw e;
    }
  }

  async add(params) {
    try {
      params["is_pending"] =
        params["feedback"] == undefined || params["feedback"] == null
          ? true
          : false;
      const output = await this.feedbackDAO.add(params);
      return output;
    } catch (e) {
      throw e;
    }
  }

  async update(params) {
    try {
      params["is_pending"] =
        params["feedback"] == undefined || params["feedback"] == null
          ? true
          : false;
      const id = params._id;
      delete params["_id"];
      const output = await this.feedbackDAO.update(id, params);
      return output;
    } catch (e) {
      throw e;
    }
  }

  async getFeedbackRequestsForAnEmployee(_id) {
    let params = { from: mongoose.Types.ObjectId(_id), is_pending: true };
    return await this.feedbackDAO.get(params);
  }
}

module.exports = FeedbackService;
