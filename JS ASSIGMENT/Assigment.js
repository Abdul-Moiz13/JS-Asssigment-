/* Question no 1: Write a JavaScript program that accepts two numbers in two prompts and
displays the larger one in the console */

// Accepting two numbers as input using prompts
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

// Converting the input strings to numbers
num1 = Number(num1);
num2 = Number(num2);

// Checking which number is larger
if (num1 > num2) {
  console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  console.log(num2 + " is larger than " + num1);
} else {
  console.log("Both numbers are equal");
}

/*Question no 2: Write a JavaScript conditional statement to find the sign of a number. Display
an alert box with the specified sign.*/
 

// Accepting a number as input using prompt
let num = prompt("Enter a number: ");

// Converting the input string to a number
num = Number(num);

// Checking the sign of the number
if (num > 0) {
  alert(num + " is a positive number.");
} else if (num < 0) {
  alert(num + " is a negative number.");
} else {
  alert(num + " is neither positive nor negative, it is zero.");
}

/*Question no 3: Write a JavaScript program that accepts five numbers in five prompts and
displays the larger one in the console.*/
 
// Accepting five numbers as input using prompts
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");
let num4 = prompt("Enter the fourth number: ");
let num5 = prompt("Enter the fifth number: ");

// Converting the input strings to numbers
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);
num5 = Number(num5);

// Finding the largest number among the five
let largest = num1;

if (num2 > largest) {
  largest = num2;
}

if (num3 > largest) {
  largest = num3;
}

if (num4 > largest) {
  largest = num4;
}

if (num5 > largest) {
  largest = num5;
}

// Displaying the largest number in the console
console.log("The largest number is: " + largest);

/* Question no 4:Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
will check if the current number is odd or even, and display a message to the
screen.*/

// Looping from 0 to 15
for (let i = 0; i <= 15; i++) {
  // Checking if the current number is odd or even
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

/*Question no 5: Write a JavaScript program to construct the following pattern, using a nested
for loop. */


// Defining the student marks as an array
const marks = [80, 90, 70, 85, 95];

// Calculating the total marks
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

// Calculating the average marks
const average = total / marks.length;

// Determining the grade based on the average marks
let grade;

if (average >= 90) {
  grade = "A+";
} else if (average >= 80) {
  grade = "A";
} else if (average >= 70) {
  grade = "B";
} else if (average >= 60) {
  grade = "C";
} else if (average >= 50) {
  grade = "D";
} else {
  grade = "F";
}

// Displaying the average marks and grade in the console
console.log("Average marks: " + average.toFixed(2));
console.log("Grade: " + grade);

/* Question no 6: Write a JavaScript program to construct the following pattern, using a nested
for loop. */


// Setting the number of rows
const rows = 5;

// Looping through each row
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  
  // Looping through each column
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  
  // Displaying the pattern for the current row
  console.log(pattern);
}
