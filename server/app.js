const express = require('express');
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require("./models").db

const app = express();
const routes = require("../routes");

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "..", "public")))
// app.use('/', routes)


// express knows this is error handling middleware b/c there are four arguments, the first of which is error
app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message);
  // once you send a response (res.send, res.render, res.json, res.sendStatus)
  // that's the end of that particular request/response cycle
});

app.use("/", routes);
const port = 3000;
app.listen(port, function() {
  console.log("The server is listening closely on port", port);
  db
    .sync({force:false})
    .then(function() {
      console.log("Synchronized the database!");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});
