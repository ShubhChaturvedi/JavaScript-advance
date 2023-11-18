// Question-1:  Write a function that takes an array and a callback function. Apply the callback function to each element of the array and return a new array with the modified elements.

let numbers = [1, 2, 3, 4, 5];

const callback = (element) => {
    return element * 2;
}

const modifiedArray = numbers.map(callback);

console.log(modifiedArray);

// Question-2:  Write a function that takes an array of numbers and returns a new array containing only the odd numbers.

const oddNumbers = (numbers) => {

    const oddNumbers = numbers.filter((element) => {
        return element % 2 !== 0;
    });

    return oddNumbers;

}

console.log(oddNumbers(numbers));

// Question-3:  Write a function that takes an array of numbers and returns a new array where each element is doubled.

const doubleNumbers = (numbers) => {

    const doubleNumbers = numbers.map((element) => {
        return element * 2;
    });

    return doubleNumbers;

}

console.log(doubleNumbers(numbers));



// Question-4:  Write a function that takes an array of strings and returns a new array where each string is transformed to uppercase.

const strings = ["shubh", "chaturvedi"];

const upperCaseStrings = (strings) => {

    const upperCaseStrings = strings.map((element) => {
        return element.toUpperCase();
    });

    return upperCaseStrings;

}

console.log(upperCaseStrings(strings));


 

// Question-5:  Write a function that uses setTimeout to simulate an asynchronous operation. The function should print a message to the console after a specified delay.


const delay = (message, delay) => {

    setTimeout(() => {

        console.log(message);

    }, delay);

}

delay("Hello World", 2000);

// this will print async message after 2 seconds as setTimeout is async function. even after question 6 it will print message after 2 seconds.

// Question-6:  WAP to perform read and write operation in a text file in JS.

const fs = require("fs");

fs.writeFile("text.txt", "Hello World", (error) => {
    
        if (error) throw error;
    
        console.log("File Written Successfully");
    
    });

fs.readFile("text.txt", "utf8", (error, data) => {
    
        if (error) throw error;
    
        console.log(data);
    
    });

//  if you have any doubt please let me know in comment section.

//  Thank You.





