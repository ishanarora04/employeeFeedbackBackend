class FeedbackController {
  constructor(feedbackService) {
    this.feedbackService = feedbackService;
  }

  async get(req, res) {
    const params = req.query;
    const output = this.feedbackService.get(params);
    res.send(output);
  }

  async add(req, res) {
    const params = req.params;
    const output = this.feedbackService.add(params);
    res.send(output);
  }

  async update(req, res) {
    const params = req.params;
    const output = this.feedbackService.update(params);
    res.send(output);
  }

  async remove(req, res) {
    const params = req.params;
    const output = this.feedbackService.remove(params);
    res.send(output);
  }
}

module.exports = FeedbackController;
