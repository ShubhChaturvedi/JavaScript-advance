// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

// same as dataTypeAss0-100.js Question-3

// github link : https://github.com/ShubhChaturvedi/JavaScript-advance/blob/main/002_parctice/dataTypeAss0-100.js


// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

// assignment operators : =, +=, -=, *=, /=, %=, **=

let a = 10;

console.log(a);

a += 10;

console.log(a);

a -= 10;

console.log(a);

a *= 10;

console.log(a);

a /= 10;

console.log(a);

a %= 10;

console.log(a);

a **= 10;

console.log(a);


// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

// same as controlStatmentsAss0-100.js Question-1

// github link : https://github.com/ShubhChaturvedi/JavaScript-advance/blob/main/002_parctice/controlStatmentsAss0-100.js


// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

// logical operators : &&, ||, !

const firstNumber = 10;

const secondNumber = 20;

if (firstNumber > 0 && secondNumber > 0) {

    console.log("Both numbers are positive");

} else if (firstNumber > 0 || secondNumber > 0) {

    console.log("Atleast one number is positive");

} else {
    
        console.log("Both numbers are negative");
    
}


// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

// bitwise operators : &, |, ^, ~, <<, >>, >>>

let b = 10;

let c = 20;

console.log(b & c);

console.log(b | c);

console.log(b ^ c);

console.log(~b);

console.log(b << 2);

console.log(b >> 2);

console.log(b >>> 2);


// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let d = 10;

let e = 20;

console.log(d > e ? d : e);


// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

// type operators : typeof, instanceof

console.log(typeof 10);

console.log(typeof "Shubh");

console.log(typeof true);

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof [1, 2, 3]);

console.log(typeof { name: "Shubh" });

console.log(typeof function () { });

console.log(typeof new Date());

console.log(typeof new Error());


// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

// string operators : +, +=

let f = "Shubh";

let g = "Chaturvedi";

console.log(f + g);

console.log(f += g);


// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

// same as Problem 7


// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

const person = {
    name: "Shubh",
    age: 20,
    city: "Mathura"
}

console.log("name" in person);

console.log("age" in person);

console.log("city" in person);

//  if you have any doubt please let me know in comment section.

//  Thank You.