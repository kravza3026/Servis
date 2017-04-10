app.controller("copyCtrl", copyCtrl)
copyCtrl.$inject = ['$scope', 'someFactory'];

function copyCtrl($scope, someFactory){
    $scope.copy = function(){
      someFactory.myObj = {
          copyText: $scope.copyText
      }
      console.log(someFactory.myObj.copyText);
    };

}