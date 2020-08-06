"use strict";

const chai = require("chai");
const expect = chai.expect;
const mongoose = require("mongoose");
const faker = require("faker");

const FeedbackDAO = require("../routes/feedback/feedbackDAO");
const FeedbackModel = require("../lib/models/feedback");
const Employee = require("../lib/models/employee");

mongoose.connect(process.env.MONGO_DB_TEST, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

describe("Feedback DAO", () => {
  const feedbackDAO = new FeedbackDAO(FeedbackModel);

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

    feedback = new FeedbackModel({
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
    const output = await feedbackDAO.get({});
    expect(output[0].is_pending).to.be.true;
  });

  afterEach(async () => {
    await mongoose.connection.dropCollection(FeedbackModel.collection.name);
    await mongoose.connection.dropCollection(Employee.collection.name);
  });
});
