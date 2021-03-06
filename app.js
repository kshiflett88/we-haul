const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require('passport');
const path = require('path');
const users = require("./routes/api/users");
const jobs = require("./routes/api/jobs");
const { seedJobs } = require('./seeds/scripts');
// const cors = require('cors')





if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to mongoDB"))
.catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

// app.use(cors())

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });



app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/jobs", jobs);
app.get('/seeds', (req, res) => {
  seedJobs(25)
  res.send('we have the seeds');
})





const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));



// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/build"));
//   app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }