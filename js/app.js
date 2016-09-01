'use strict';

(function(){
  angular
    .module('mad', [
    'ui.router'
    ])
    .controller('IndexController',
    function(){
      var vm = this;
      vm.guesses = [];
      vm.title;
      vm.users = [];
      vm.me;
      vm.gameTitle = function(){
        console.log(vm.game.title);
        vm.title = vm.game.title;
        vm.game.title = "";
      };
      vm.userName = function(){
        vm.users.push(vm.user.name);
        vm.me = vm.user.name;
        vm.user.name="";
      };
      vm.userGuess = function(){
        console.log(vm.guess);
        vm.guesses.push(vm.guess);
        vm.guess="";
      };
    })
}());

