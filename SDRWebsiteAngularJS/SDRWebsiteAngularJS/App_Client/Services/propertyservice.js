(function(){
    
    var propertyservice = function($http){
      
      var getProperties = function(){
            return $http.get("http://sdrwebapi:8001/api/Property")
                        .then(function(response){
                           return response.data; 
                        });
      };
      
      var getResources = function(){
          return $http.get("http://sdrwebapi:8001/api/Resource")
                        .then(function(response){
                            return response.data;
                        });
      };
      
      var getStates = function () {
          return $http.get("http://sdrwebapi:8001/api/State")
                        .then(function (response) {
                            return response.data;
                        });
      };

      var saveProperty = function (model) {
          //alert(model);
          //alert(model.Name);
          return $http.post("http://sdrwebapi:8001/api/Property", model)
              .then(function(response){
                  return response.data;
              });
      };

      return {
          getProperties: getProperties,
          getResources: getResources,
          getStates: getStates,
          saveProperty: saveProperty          
      };
        
    };
    
    var module = angular.module("SDRapp");
    module.factory("propertyservice", propertyservice);
    
}());