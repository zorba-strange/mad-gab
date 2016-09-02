var mongoose = require('./schema.js')
mongoose.Promise = global.Promise;
var Madgab = require('../models/madgab')
var User = require('../models/user')
var Game = require('../models/game')

var madgab1 = new Madgab({ ans: "sick and tired of it", obs: "sea can't higher dove fit"})
var madgab2 = new Madgab({ ans: "a king size bed", obs: "ache inks high sped"})
var madgab3 = new Madgab({ ans: "he's a ladies man", obs: "easel aid ease man"})

var user1 = new User({ name: "user1", wins: 0 })
var user2 = new User({ name: "unsweetened green tea", wins: 0 })

var game1 = new Game({ title: "game1" })

var madgabs = [madgab1, madgab2, madgab3]
var users = [user1, user2]
var games = [game1]

Madgab.remove({}).then(function(){
  Madgab.collection.insert(madgabs).then(function(){
    console.log("ur mom likes madgab");
    process.exit();
  });
});

User.remove({}).then(function(){
  User.collection.insert(users).then(function(){
    console.log("user saved");
    process.exit();
  });
});

Game.remove({}).then(function(){
  Game.collection.insert(games).then(function(){
    console.log("game saved");
    process.exit();
  });
});
