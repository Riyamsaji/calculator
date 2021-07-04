
//step1.To display all the numbers we create a function displayName with a parameter of num whenever we pass an argument it will print the same argument
// function displayNumber(num){
//     inpt.value+=num;
// }

//simplifying the displayNumber function using arrow function
let displayNumber = (num) => inpt.value += num;

//step2:To perform the mathematical operations
//there is a inbuilt method called evaluateNumber to perform all operations
//method1
// function evaluateNumber() {
//     inpt.value = eval(inpt.value)
// }
//method2
let evaluateNumber= () => inpt.value = eval(inpt.value)
//button for C-clearing all elements in the inpt
//method1
// function Clear(){
//     inpt.value=""
// }
//method2
let Clear = () => inpt.value = ""
//button for clearing the last element in the inpt
//  function lastElementClear(){
//      inpt.value=inpt.value.slice(0,-1)
//  }
let lastElementClear=()=>inpt.value=inpt.value.slice(0,-1)
//to print value of pi
// function piValue(){
//     inpt.value="3.14"
// }
let piValue=()=>inpt.value+="3.14"

//print the value of e
let eValue=()=>inpt.value+="2.71828"

