var mongoose = require('mongoose')
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var MadgabSchema = new Schema({
  ans: String,
  obs: String
})

var UserSchema = new Schema({
  name: String,
  wins: Number
})

var GameSchema = new Schema({
  title: String,
  users: [UserSchema]
})

mongoose.connect('mongodb://localhost/madgab')

mongoose.model("Madgab", MadgabSchema)
mongoose.model("User", UserSchema)
mongoose.model("Game", GameSchema)

module.exports = mongoose;
