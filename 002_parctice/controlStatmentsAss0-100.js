
// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const x = 10;

if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is not greater than 10");
}

// Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

const userAge = 18;

if (userAge >= 18) {
    console.log("You are illegible for drive a car");
} else {
    console.log("You are not illegible for drive a car");
}

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const score = 90;

if (score >= 90 && score <= 100) console.log("A");
else if (score >= 80 && score < 90) console.log("B");
else if (score >= 70 && score < 80) console.log("C");
else if (score >= 60 && score < 70) console.log("D");
else if (score >= 50 && score < 60) console.log("E");
else if (score < 50) console.log("F");

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

const time = 12;

if (time >= 0 && time < 12) console.log("Good Morning");
else if (time >= 12 && time < 16) console.log("Good Afternoon");
else if (time >= 16 && time < 20) console.log("Good Evening");
else if (time >= 20 && time <= 24) console.log("Good Night");
else console.log("Invalid Time");

// Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

const day = 1;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}

// Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

const month = 1;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid Month");
        break;
}

// Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

const fruit = "Apple";

switch (fruit) {
    case "Apple":
        console.log("Apple");
        break;
    case "Mango":
        console.log("Mango");
        break;
    case "Orange":
        console.log("Orange");
        break;
    default:
        console.log("Invalid Fruit");
        break;
}

// Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

const temperature = 100;

if (temperature >= 0 && temperature < 30) console.log("Low");
else if (temperature >= 30 && temperature < 60) console.log("Medium");
else if (temperature >= 60 && temperature <= 100) console.log("High");
else console.log("Invalid Temperature");

// Question-9:   WAP that classifies a number as positive, negative, even, or odd.

const number = 10;

if (number > 0) console.log("Positive");
else if (number < 0) console.log("Negative");
else if (number % 2 == 0) console.log("Even");
else if (number % 2 != 0) console.log("Odd");
else console.log("Invalid Number");


// Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

const username = "abc";

if (username.length < 6) console.log("Username too short");
else if (username.length > 15) console.log("Username too long");
else console.log("Username accepted");

//  if you have any doubt please let me know in comment section.

//  Thank You.
