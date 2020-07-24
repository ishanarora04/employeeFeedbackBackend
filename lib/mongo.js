const mongoose = require("mongoose");
const Promise = require("bluebird");
const fs = require("fs");
const path = require("path");

const readSync = Promise.promisify(fs.readdir);

async function connect(url) {
  try {
    const db = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const modelsPath = path.resolve(__dirname, "models");

    const output = await readSync(modelsPath);

    output.forEach((elem) => {
      require(modelsPath + "/" + elem);
    });

    return db;
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;
