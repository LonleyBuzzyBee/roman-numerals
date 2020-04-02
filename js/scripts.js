// // business logic

function myFunc(number) {

  var letter = number.split("");
  console.log(letter);
  var roman = ["I","V"]; //array
  console.log(roman);
  if(number <= 3){
    letter = roman[0].repeat(number);
    $(".result").text(letter);

  }else if (number >= 3 ){
    letter = roman[0].repeat(number-[1]);
    $(".result").text(roman[1]+letter);
  }
}


// 1   "I"  -add
// 2   "II" -add
// 3   "III"-add
// 4   "IV" -subtract from new symbol
// 5   "V"  -symbol
// 6   "VI" -add
// 7   "VII" -add
// 8   "VIII" -add
// 9   "IX" -subtract from new symbol
// 10  "X"  -symbol







// user interface logic
$(document).ready(function(){
  $("form#form-container").submit(function(event){
    event.preventDefault();
    var numbersInput =$("input#user-input").val();
      myFunc(numbersInput);
      // $(".result").text(myFunc(numbersInput));
  });
});