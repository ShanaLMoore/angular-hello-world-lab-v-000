function MainController ($scope) {
  $scope.contact = {
    name: 'Shana Moore',
    email: 'Shana@gmail.com',
    phone: '7077659833'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);