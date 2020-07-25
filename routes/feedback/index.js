const feedbackModel = require("./../../lib/models/feedback");
const FeedbackController = require("./feedbackController");
const FeedbackService = require("./feedbackService");
const FeedbackDAO = require("./feedbackDAO");

const feedbackDAO = new FeedbackDAO(feedbackModel);
const feedbackService = new FeedbackService(feedbackDAO);
const feedbackController = new FeedbackController(feedbackService);

module.exports = feedbackController;
