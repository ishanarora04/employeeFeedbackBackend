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
      const output = await this.feedbackDAO.add(params);
      return output;
    } catch (e) {
      throw e;
    }
  }

  async update(params) {
    try {
      const id = params._id;
      delete params["_id"];
      await this.feedbackDAO.update(id, params);
    } catch (e) {
      throw e;
    }
  }

  async remove(params) {
    try {
      await this.feedbackDAO.remove(params);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = FeedbackService;
