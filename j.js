
var world=angular.module("tor",[]);
 
/*---------controladores-------------*/
world.controller('wordctr',function($scope,$http){
	var urlPaises='https://restcountries.eu/rest/v2/region/';

	$scope.loadpaises=function(){
		$http.get(urlPaises+$scope.regioncode)
		.success(function(countris){
			$scope.listadocounti=countris;
		})
	}
});


	world.controller('alumnos',AlumnosController);

	function AlumnosController($scope)  {
		$scope.lista=[
		{nombre:"juan", telefono:"123323",curso:"seo"},
		{nombre:"martin", telefono:"1999323",curso:"javascript"},
		{nombre:"dardo", telefono:"1554323",curso:"angular"}
		];

	$scope.save=function(){
		$scope.lista.push({nombre:$scope.recojo.nombre,telefono:$scope.recojo.telefono,curso:$scope.recojo.curso});
	  $scope.formVisibiliti=false;	
	}	
	$scope.formVisibiliti=false;
	$scope.showForm=function(){
		$scope.formVisibiliti=true;
	}
	};

            world.controller('calculadora',calculadoraSumaYPromedio);

            function calculadoraSumaYPromedio($scope)  {
              $scope.febrero=0;
              $scope.enero=0;
              $scope.marzo=0;

              $scope.promedio=function(){ return ($scope.febrero + $scope.enero + $scope.marzo)/3}
              $scope.total=function(){ return $scope.febrero + $scope.enero + $scope.marzo}
            };

    /*---------fin controladores-------------*/  
    
    /*---------ng route-------------*/   

   