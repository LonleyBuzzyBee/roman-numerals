// business logic
function myFunc(number) {
  // var finalAnswer = [];
  // var numFilter = [1,2,3,4,5,6,7,8,9];
  // var singleNumber = number.split(""); 
  
  // // var numberPush = number.push(roman[])

  // if (numFilter.includes(singleNumber[0])) {
  //     finalAnswer.push()

      //1,2,3
      var result = "";
      var one = "I";

      if(number <= 3){
        result = one.repeat(number)
      }
      console.log(result);
    // return result;

}






// user interface logic
$(document).ready(function(){
  $("form#form-container").submit(function(event){
    event.preventDefault();
    var numbersInput =$("input#user-input").val();
      myFunc(numbersInput);
      $(".result").text(result);
  });
});