"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Feedbacks", "from_emp_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "Employees",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Feedbacks", "to_emp_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "Employees",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Feedbacks", "from_emp_id");
    await queryInterface.removeColumn("Feedbacks", "to_emp_id");
  },
};
