angular.module('Seminar')
    .controller('RegisterCourseController', ['$scope', '$cookieStore', '$http', RegisterCourseController]);

function RegisterCourseController($scope, $cookieStore, $http) {

  console.log('RegisterCourseController loaded');

  $scope.courseData = {
    name: "",
    instructor: "",
    room: ""
  };

  $scope.registerNewCourse = function() {
    console.log('$scope.courseData : ', $scope.courseData);
    saveNewCourse($scope.courseData);
  };

  // This function will be placed in services
  function saveNewCourse(data) {
    var dummyData = {
        name: "Souvik Roy",
        job: "Software Developer"
    };
    return $http.post("https://reqres.in/api/users", {data: dummyData}).then(
      function(response) {
        console.log(response.data);
        return true;
      },
      function(error){
        console.log(error);
        return false;
      }
    );
  }

}
