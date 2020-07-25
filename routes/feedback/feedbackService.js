class FeedbackService {
  constructor(feedbackDAO) {
    this.feedbackDAO = feedbackDAO;
  }

  async get(params, projection) {
    const feedbacks = await this.feedbackDAO.get(params, projection);
    return feedbacks;
  }

  async add(params) {
    const output = await this.feedbackDAO.add(params);
    return output;
  }

  async update(params) {
    const id = params._id;
    delete params["_id"];
    await this.feedbackDAO.update(id, params);
  }

  async remove(params) {
    await this.feedbackDAO.remove(params);
  }
}

module.exports = FeedbackService;
