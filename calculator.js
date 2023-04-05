// Program for a simple calculator
// The operator input
calc();

function calc(){
    var operator =  prompt('Enter operator ( either +, -, * or / ): ');

if ( !operator ){
  alert('please input an operand')
  return;
}


// take the operand input 
var firstNumber = parseFloat(prompt('Enter first Number :'));
var secondNumber = parseFloat(prompt('Enter second Number :'));

let result = 0;


// if and else statement
// if(operator == '+'){
//     result = firstNumber + secondNumber;
// }
// else if (operator == '-'){
//     result = firstNumber - secondNumber;
// }
// else if ( operator == '*'){
//     result = firstNumber * secondNumber;
// }
// else{
//     result = firstNumber/secondNumber;
// }

switch (operator){
    case "-":
        result = firstNumber - secondNumber
        break;
    default:
        alert('You did not pass a correct operator')
        break;

  case "*":
    result = firstNumber + secondNumber
    break;
    

    case "/":
    result = firstNumber/secondNumber
    break;
    
    case "+":
        result = firstNumber + secondNumber
    
}

// display the result
console.log(result)}
