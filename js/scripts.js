// // business logic

  var outPut = [];

function myFunc(inputNumber) {
  
  var roman = ["I","V","X","L","C"]; //array
  var numberArray = inputNumber.split("").map(function(number) {
          return parseInt(number);
          
        }); 
      console.log(numberArray);

  // var stringNumber = parseInt(numberArray)
  // '2123' = ???
  // [2, 1, 2, 3]
  // 2000 = ?
  // 100 = ?
  // 20 = ?
  // 3 = ?
  
  // console.log(number);

  if (numberArray % 100 == 0) {
      numberArray.join("");
      outPut.push(roman[4]);
     
  }else if (numberArray % 50 == 0 ) {
    outPut.push(roman[3]);
  }else if (numberArray % 10 == 0) {
    outPut.push(roman[2]);
  }else if (numberArray % 5 == 0 ){
    outPut.push(roman[1]);

  }else if(numberArray % 1 == 0) {
    outPut.push(roman[0]);
    
  // }else {
    // outPut.push(roman[0].repeat(number));
  }
 
}

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 5000

// 1   "I"  -add
// 2   "II" -add
// 3   "III"-add
// 4   "IV" -subtract from new symbol
// 5   "V"  -a new symbol

// 6   "VI" -add
// 7   "VII" -add
// 8   "VIII" -add
// 9   "IX" -subtract from new symbol
// 10  "X"  -a new symbol






// user interface logic
$(document).ready(function(){
  $("form#form-container").submit(function(event){
    event.preventDefault();
    var numbersInput =$("input#user-input").val();
      myFunc(numbersInput);
      $(".result").text(outPut);
      console.log($(".result").text(outPut));
  });
});

// // // business logic

// function myFunc(number) {

//   var letter = number.split("");
//   console.log(letter);
//   var roman = ["I","V","X"]; //array


//   if(number <= 3){
//     letter = roman[0].repeat(number);
//     $(".result").text(letter);
//   }else if (number == 4 ){
//     letter = roman[0].repeat(number-[3]);
//     $(".result").text(letter+roman[1]);
//   } else if (number == 5) {
//     letter = roman[1];
//     $(".result").text(letter);
//   } else if (number >= 5 && number < 9) {
//     letter = roman[1] + roman[0].repeat(number-[5]);
//     $(".result").text(letter);
//   } else if (number == 9 ){
//     letter = roman[2];
//     $(".result").text(letter+roman[0]);
  
//   }
// }


// // 1   "I"  -add
// // 2   "II" -add
// // 3   "III"-add
// // 4   "IV" -subtract from new symbol
// // 5   "V"  -a new symbol

// // 6   "VI" -add
// // 7   "VII" -add
// // 8   "VIII" -add
// // 9   "IX" -subtract from new symbol
// // 10  "X"  -a new symbol







// // user interface logic
// $(document).ready(function(){
//   $("form#form-container").submit(function(event){
//     event.preventDefault();
//     var numbersInput =$("input#user-input").val();
//       myFunc(numbersInput);
//       // $(".result").text(myFunc(numbersInput));
//   });
// });