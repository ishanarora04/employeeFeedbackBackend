const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const mongoose = require("mongoose");
const faker = require("faker");

const FeedbackDAO = require("../routes/feedback/feedbackDAO");
const feedbackModel = require("../lib/models/feedback");
const Employee = require("../lib/models/employee");

mongoose.connect(
  "mongodb://ishanarora:ishanarora1@ds133353.mlab.com:33353/employee_feedback_test",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

describe("Feedback DAO", () => {
  const feedbackDAO = new FeedbackDAO(feedbackModel);

  let emp1, emp2, feedback;

  beforeEach(async () => {
    emp1 = new Employee({ name: "Amy", is_deleted: false });
    emp2 = new Employee({ name: "Bob", is_deleted: false });
    await emp1.save();
    await emp2.save();

    feedback = {
      from: emp1,
      to: emp2,
      is_pending: true,
      is_deleted: false,
    };

    feedback = new feedbackModel({
      from: emp1,
      to: emp2,
      is_pending: true,
      is_deleted: false,
    });
    feedback = await feedback.save();
  });

  it("should add 2 employees for a feedback relation", async () => {
    const feedback_val = faker.lorem.lines();

    const feedback = {
      from: emp1,
      to: emp2,
      feedback: feedback_val,
      is_pending: false,
      is_deleted: false,
    };
    const output = await feedbackDAO.add(feedback);
    expect(output.feedback).to.equals(feedback_val);
  });

  it("should update feedback object with a feedback", async () => {
    const feedback_val = faker.name.jobArea();
    const output = await feedbackDAO.update(feedback._id, {
      feedback: feedback_val,
      is_pending: false,
    });
    expect(output.feedback).to.equals(feedback_val);
  });

  it("should get all the feedbacks for current_employee to fill", async () => {
    const params = {
      from: emp1,
      is_pending: true,
      is_deleted: false,
    };

    const output = await feedbackDAO.get({});
    expect(output[0].is_pending).to.be.true;
  });

  afterEach(async () => {
    await mongoose.connection.dropCollection(feedbackModel.collection.name);
    await mongoose.connection.dropCollection(Employee.collection.name);
  });
});
