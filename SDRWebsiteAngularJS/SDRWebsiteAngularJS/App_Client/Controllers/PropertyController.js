(function () {

    var app = angular.module("SDRapp");

    var PropertyController = function ($scope, propertyservice) {

        var onRepo = function (data) {
            $scope.PropertyListData = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        var getProperties = function (reason) {
            propertyservice.getProperties()
             .then(onRepo, onError);
        };

       
        var onStates = function (data) {            
            $scope.States = data;           
        };

        //when first loading controller
        getProperties();

        propertyservice.getStates()
              .then(onStates, onError);

        $scope.Model = {};
        //$scope.Model.name = "caca";

        //when saving property go get all new properties...this doesnt have to be can just push the new one to the "$scope.PropertyListData" but just for study purposes
        $scope.saveProperty = function () {            
            propertyservice.saveProperty($scope.Model)
              .then(onDummy, onError);
        };

        var onDummy = function (data) {
            alert('onDummy');
        };

        //    var countdownInterval = null;
        //    var startCountdown = function(){
        //        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        //    };

        //    $scope.search = function(username) {
        //        if(countdownInterval)    {
        //            $interval.cancel(countdownInterval);
        //            $scope.countdown = null;
        //        }
        //        $location.path("/user/" + username);
        //    };

        //    $scope.username = "angular";
        //    $scope.countdown = 5;
        //    startCountdown();
    };

    app.controller("PropertyController", PropertyController);

}());