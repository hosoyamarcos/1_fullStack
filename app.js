const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route("/")
.get(function(req,res) {
  res.send("hello world");
});

app.route("/about")
.get(function(req,res) {
  res.send("about page")
})




app.listen(3000 , function () {
  console.log("App running on port 3000")
})
