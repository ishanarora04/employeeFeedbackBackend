class FeedbackController {
  constructor(feedbackService) {
    this.feedbackService = feedbackService;
  }

  async get(req, res) {
    try {
      const params = req.query;
      const output = this.feedbackService.get(params);
      res.send(output);
    } catch (e) {}
  }

  async add(req, res) {
    try {
      const params = req.params;
      const output = this.feedbackService.add(params);
      res.send(output);
    } catch (e) {}
  }

  async update(req, res) {
    try {
      const params = req.params;
      const output = this.feedbackService.update(params);
      res.send(output);
    } catch (e) {}
  }

  async remove(req, res) {
    try {
      const params = req.params;
      const output = this.feedbackService.remove(params);
      res.send(output);
    } catch (e) {}
  }
}

module.exports = FeedbackController;
