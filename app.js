const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const sounds = require('./routes/api/sounds');
const passport = require('passport');
const serveStatic = require('serve-static');



mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));



// app.get("/", (req, res) => res.send("new message"));

// app.get('/', (req, res) => {
//   res.sendFile('./frontend/public/eye.mp3', { root: __dirname });
// });

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", users);
app.use("/api/sounds", sounds);





const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));