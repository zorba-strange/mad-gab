var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var cors = require('cors')
var authorsController = require("./controllers/madgabsController")
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/madgab')
var app = express()

app.set("view engine", "hbs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.listen(4000, function(){
  console.log("port 4000")
})

app.get("/madgabs", madgabsController.index)
