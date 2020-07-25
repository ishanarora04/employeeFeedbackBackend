const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  from: { type: mongoose.Schema.ObjectId, ref: "Employee" },
  to: { type: mongoose.Schema.ObjectId, ref: "Employee" },
  feedback: String,
  is_pending: Boolean,
  is_deleted: Boolean,
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
