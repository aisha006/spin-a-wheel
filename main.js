const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const createError = require("http-errors");

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error", {message: err.message});
    /*app.get("/", (req, res, next) => {
    // mimic an error by throwing an error to break the app!
    throw new Error("Something went wrong");
    res.send("Welcome to main route!")
    });*/
});  


app.listen(8080, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    console.log(`Yupp! Server is running on port 8080`);
  });