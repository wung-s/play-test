(function() {
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('components.users', [])
  .controller('UsersController', function(Users) {
    var vm = this;
    vm.users = Users.all();
    // var users = Users.all();
    // console.log(vm.users);
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'components/users/users.html',
        controller: 'UsersController as uc'
      });
  });
})();