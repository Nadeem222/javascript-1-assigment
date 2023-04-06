let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));

// Compare the numbers and display the larger one
if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num1 < num2) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}

let num = parseFloat(prompt("Enter a number: "));

// Check the sign of the number and display an alert box with the specified sign
if (num > 0) {
    alert("The sign is +");
} else if (num < 0) {
    alert("The sign is -");
} else {
    alert("The number is zero.");
}

let input1 = parseFloat(prompt("Enter the first number: "));
let input2 = parseFloat(prompt("Enter the second number: "));
let input3 = parseFloat(prompt("Enter the third number: "));
let input4 = parseFloat(prompt("Enter the fourth number: "));
let input5 = parseFloat(prompt("Enter the fifth number: "));

let largestNumber = input1;

if (input2 > largestNumber){
    largestNumber = input2;
}
if(input3 > largestNumber){
    largestNumber = input3;
}
if (input4 > largestNumber){
    largestNumber = input4;
}
if (input5 > largestNumber){
    largestNumber = input5
}

console.log("the largest num is:" + largestNumber)


for (var input = 0; input <= 15; input++) {
    // Create a new paragraph element
    var paragraph = document.createElement("p");
  
    // Check if the current number is odd or even
    if (input % 2 === 0) {
      // Set the text content of the paragraph element
      paragraph.textContent = input + " is even";
    } else {
      // Set the text content of the paragraph element
      paragraph.textContent = input + " is odd";
    }
  
    // Append the paragraph element to the body of the HTML document
    document.body.appendChild(paragraph);
  }

  function doSum() {
    let percentage = +document.querySelector("#num1").value
    

    let resultElement = document.querySelector("#result1")

    if (percentage <= 60 ){
        resultElement.innerHTML = "Fail"

    } else if (percentage <= 70 ){
     resultElement.innerHTML = "Grade D"

    } else if (percentage <= 80){

        resultElement.innerHTML ="Grade C"

    }else if (percentage <= 90){

        resultElement.innerHTML ="Grade B"

        
    } else if (percentage <= 100){

        resultElement.innerHTML ="Grade A"

         
    } 

}


for (var fizz = 1; fizz <= 100; fizz++) {
    // Check if the number is a multiple of both three and five
    if (fizz % 3 === 0 && fizz % 5 === 0) {
      console.log("fizzBuzz");
    } else if (fizz % 3 === 0) {
      // Check if the number is a multiple of three
      console.log("fizz");
    } else if (fizz % 5 === 0) {
      // Check if the number is a multiple of five
      console.log("buzz");
    } else {
      // Print the fizzber itself
      console.log(fizz);
  }
}

// Define the number of rows for the pattern
var numRows = 5;

// Use a nested for loop to construct the pattern
for (var i = 1; i <= numRows; i++) {
  var row = ""; // Initialize an empty string for each row
  for (var j = 1; j <= i; j++) {
    row += "*"; // Add a "*" to the row for each column
  }
  console.log(row); // Print the row to the console
}
