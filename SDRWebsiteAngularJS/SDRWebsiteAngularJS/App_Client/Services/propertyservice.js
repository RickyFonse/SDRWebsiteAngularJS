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
      
      return {
          getProperties: getProperties,
          getResources: getResources
      };
        
    };
    
    var module = angular.module("SDRapp");
    module.factory("propertyservice", propertyservice);
    
}());