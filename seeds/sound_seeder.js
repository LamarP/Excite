const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require('../config/keys').mongoURI;

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Sound = require("../models/Sound");

// Connect to DB
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const sounds = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/sounds.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Sound.create(sounds);
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