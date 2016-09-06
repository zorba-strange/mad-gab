var mongoose = require('./connection')

var Madgab = mongoose.model("Madgab");
var User = mongoose.model("User");
var Game = mongoose.model("Game");

var madgab1 = { ans: "sick and tired of it", obs: "sea can't higher dove fit"}
var madgab2 = { ans: "a king size bed", obs: "ache inks high sped"}
var madgab3 = { ans: "he's a ladies man", obs: "easel aid ease man"}
var madgab4 = { ans: "nose hair", obs: "know sayer"}
var madgab5 = { ans: "he's a sly fox", obs: "ease ace life ox"}
var madgab6 = { ans: "a bottomless pit", obs: "abe autumn lisp hit"}
var madgab7 = { ans: "a sleepless night", obs: "ace leap lesson height"}
var madgab8 = { ans: "a twinkle in his eye", obs: "eight wean gull any size"}
var madgab9 = { ans: "stirring beak he knee", obs: "string bikini"}
var madgab10 = { ans: "white elephant", obs: "why tail huff hunt"}
var madgab11 = { ans: "do I know you", obs: "dew wino hue"}
var madgab12 = { ans: "sick and tired of it", obs: "sea can't higher dove fit"}
var madgab13 = { ans: "british accent", obs: "pretty shack sent"}
var madgab14 = { ans: "a pair of tennis shoes", obs: "up arrow tin issues"}
var madgab15 = { ans: "I demand an answer", obs: "hidey man done ant sir"}
var madgab16 = { ans: "eat your heart out", obs: "each oar hard tout"}
var madgab17 = { ans: "over the counter", obs: "owe forth account herd"}
var madgab18 = { ans: "a lucky charm", obs: "ail huck each arm"}
var madgab19 = { ans: "don't waste your time on it", obs: "dawn ways chore tie moan knit"}
var madgab20 = { ans: "", obs: ""}

var user1 = { name: "user1", wins: 0 }
var user2 = { name: "unsweetened green tea", wins: 0 }

var game1 = { title: "game1" }

var madgabs = [madgab1, madgab2, madgab3, madgab4, madgab5, madgab6, madgab7, madgab8, madgab9, madgab10, madgab11, madgab12, madgab13, madgab14, madgab15, madgab16, madgab17, madgab18, madgab19, madgab20]
var users = [user1, user2]
var games = [game1]

User.remove({}).then(function(err) {
  if(err){
    console.log(err)
  } else {
  console.log("balls");
  }
User.collection.insert(users, function(err) {
  if(err){
    console.log(err)
  } else {
  console.log("User");
  }
  })
})

Game.remove({}).then(function() {
  Game.collection.insert(games, function() {
    console.log("Game")
  })
})

Madgab.remove({}).then(function() {
  Madgab.collection.insert(madgabs, function() {
    console.log("Madgab");
  })
})
