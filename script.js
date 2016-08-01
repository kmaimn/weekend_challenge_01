$(document).ready(function() {
  var empArray = [];

  $("#employeeinfo").on("submit", function(event){
    //stops the defaut upon click - default is clear and send to server;
    event.preventDefault();
    //values object will store individual employee input;
    var values = {}

    //seralizeArray will create an array of objects;
    var fields =
    $("#employeeinfo").serializeArray();

    //do this for each variable in the array;
    //can't use dot notation to access the values in the object in the array - use [];
    fields.forEach(function(element, index, array){
      values[element.name] = element.value;
    });

    console.log(values);

    //in the employeeform, find the input text type and replace the values with ' ';
    $("#employeeinfo").find("input[type=text]").val(" ");
    empArray.push(values);
    console.log(empArray);

    combineSalary();
    //add the values to the DOM, next lines will point to where;

    appendDom(values);

    function appendDom(empInfo){
      $("#container").append('<div class="person"></div>');

      var $el = $("#container").children().last();

      $el.append('<p>' + '<b>Employee ID: </b>' + empInfo.empid
      + ' ' + '<b>Employee Name: </b>' + empInfo.firstname + ' ' + empInfo.lastname + ' ' + '<b>Job Title: </b>' + empInfo.jobtitle + ' ' + '<b>Yearly Salary: </b>' + empInfo.salary + '</p>' + '<button class="delete">Delete</button>');
    }

  });
  //function will go thorugh the array and add salary and put in a new variable, monthlySalary;
  function combineSalary(){
    var monthlySalary = 0;

    empArray.forEach(function(element){
      monthlySalary += parseInt(element.salary/12);
    });

    alert("Total cost of salaries this month is: " + monthlySalary);
    console.log(monthlySalary);
    return monthlySalary;
  }
$("#container").on("click", "button", delEmp)

function delEmp(){

  $(this).parent().remove();

  // $(".delete").on("click", delEmp)
}
  // function delEmp(){
    // var delEmpNum = prompt("Employee Number to remove:");
    // console.log($delEmpNum);
  //   $("#container").filter(':contains('delEmpNum')').remove();
  // };
});
