const mongoose = require("mongoose");

class FeedbackDAO {
  constructor(Model) {
    this.Model = Model;
  }

  async add(params) {
    let feedback = new this.Model(params);
    feedback = await feedback.save();
    return feedback;
  }

  async update(id, params) {
    const updatedFeedback = await this.Model.findByIdAndUpdate(
      mongoose.Types.ObjectId(id),
      params,
      {
        new: true,
      }
    );
    return updatedFeedback;
  }

  async get(params, projection) {
    params["is_deleted"] = false;
    const feedbacks = await this.Model.find(params, projection);
    return feedbacks;
  }
}

module.exports = FeedbackDAO;
