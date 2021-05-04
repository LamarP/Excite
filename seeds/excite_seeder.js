const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require('../config/keys').mongoURI;

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Excite = require("../models/Excite");
const { userInfo } = require("os");

// Connect to DB
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const excites = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/excites.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Excite.create(excites);
    console.log("Data Imported...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
// const deleteData = async () => {
//   try {
//     await User.deleteMany();
//     console.log("Data Destroyed...");
//     process.exit();
//   } catch (err) {
//     console.error(err);
//   }
// };
// if (process.argv[2] === "-i") {
  importData();
// } else if (process.argv[2] === "-d") {
//   deleteData();
// }