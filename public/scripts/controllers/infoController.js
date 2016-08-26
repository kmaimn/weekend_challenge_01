myApp.controller('infoController', ['$scope', function($scope){
  console.log('infoController is working');

  //create an empty array to store employee info from form;
  $scope.employees = [];

  //function that will push the info as an object;
  $scope.storeInfo = function(){
    $scope.employees.push({
      firstname: $scope.firstname,
      lastname: $scope.lastname,
      empid: $scope.empid,
      jobtitle: $scope.jobtitle,
      salary: $scope.salary,
      monthlySalary: $scope.salary/12
    });
    //set the fields to empty after info is sent to the array;
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.empid = '';
    $scope.jobtitle = '';
    $scope.salary = '';
    console.log($scope.employees);

  };

  //fucnction to delete the employee based on the index number in the array;
  $scope.deleteEmp = function(index){
    console.log(index);
    $scope.employees.splice(index, 1);
  }

  //get monthly total;
  $scope.monthlyTotal = function() {
    var total = 0;
    angular.forEach($scope.employees, function(employee) {
      total += employee.monthlySalary;
    });

    return total;
  }

}]);
