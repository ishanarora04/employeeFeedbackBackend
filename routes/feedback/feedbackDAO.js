const mongoose = require("mongoose");

class FeedbackDAO {
  constructor(Model) {
    this.Model = Model;
  }

  async add(params) {
    try {
      let feedback = new this.Model(params);
      feedback = await feedback.save();
      return feedback;
    } catch (e) {
      throw e;
    }
  }

  async update(id, params) {
    try {
      const updatedFeedback = await this.Model.findByIdAndUpdate(
        mongoose.Types.ObjectId(id),
        params,
        {
          new: true,
        }
      );
      return updatedFeedback;
    } catch (e) {
      throw e;
    }
  }

  async get(params, projection) {
    try {
      params["is_deleted"] = false;
      const feedbacks = await this.Model.find(params, projection)
        .populate("from")
        .populate("to");
      return feedbacks;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = FeedbackDAO;
