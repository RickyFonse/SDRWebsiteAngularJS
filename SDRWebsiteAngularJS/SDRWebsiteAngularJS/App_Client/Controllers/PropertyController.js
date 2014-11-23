(function() {

    var app = angular.module("SDRapp");
 
    var PropertyController = function ($scope, propertyservice) {

        var onRepo = function (data) {
            $scope.PropertyListData = data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        propertyservice.getProperties()
              .then(onRepo, onError);

       
        //    var decrementCountdown = function(){
        //        $scope.countdown -= 1;
        //        if($scope.countdown < 1){
        //            $scope.search($scope.username);
        //        }
        //    };

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