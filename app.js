const mongoose = require('mongoose');
// this creates a new express server
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
// const passport = require('passport');
//set up a basic route so we can render info to the page
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));



app.get("/", (req, res) => res.send("new message"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", users);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));