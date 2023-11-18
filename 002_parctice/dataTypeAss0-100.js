// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

const distanceInKilometer = 100;

const convertIntoMeter = (distanceInKilometer) => {
    return distanceInKilometer * 1000;
}

const convertIntoCentimeter = (distanceInKilometer) => {
    return distanceInKilometer * 100000;
}

console.log(`Distance in Meter: ${convertIntoMeter(distanceInKilometer)}`);
console.log(`Distance in Centimeter: ${convertIntoCentimeter(distanceInKilometer)}`);

// Question-2:    WAP to input radius of a circle and log the area of circle.

const radiusOfCircle = 10;

const areaOfCircle = (radiusOfCircle) => {
    return 3.14 * radiusOfCircle * radiusOfCircle;
}

console.log(`Area of Circle: ${areaOfCircle(radiusOfCircle)}`);

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

const firstNumber = 10;
const secondNumber = 20;

const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

console.log(`Addition: ${add(firstNumber, secondNumber)}`);
console.log(`Subtraction: ${subtract(firstNumber, secondNumber)}`);
console.log(`Multiplication: ${multiply(firstNumber, secondNumber)}`);
console.log(`Division: ${divide(firstNumber, secondNumber)}`);

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

const firstSubjectMarks = 80;
const secondSubjectMarks = 90;

const totalMarks = (firstSubjectMarks, secondSubjectMarks) => {
    return firstSubjectMarks + secondSubjectMarks;
}

const percentage = (firstSubjectMarks, secondSubjectMarks) => {
    return (totalMarks(firstSubjectMarks, secondSubjectMarks) / 200) * 100;
}

console.log(`Total Marks: ${totalMarks(firstSubjectMarks, secondSubjectMarks)}`);
console.log(`Percentage: ${percentage(firstSubjectMarks, secondSubjectMarks)}`);

// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const lengthOfRectangle = 10;
const breadthOfRectangle = 20;

const areaOfRectangle = (lengthOfRectangle, breadthOfRectangle) => {
    return lengthOfRectangle * breadthOfRectangle;
}

const perimeterOfRectangle = (lengthOfRectangle, breadthOfRectangle) => {
    return 2 * (lengthOfRectangle + breadthOfRectangle);
}

console.log(`Area of Rectangle: ${areaOfRectangle(lengthOfRectangle, breadthOfRectangle)}`);
console.log(`Perimeter of Rectangle: ${perimeterOfRectangle(lengthOfRectangle, breadthOfRectangle)}`);

// Question-6:    WAP to input n numbers and log the average of those number.

const numbers = [10, 20, 30, 40, 50];

const average = (numbers) => {
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum / numbers.length;
}

console.log(`Average: ${average(numbers)}`);

// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

const distanceBetweenTwoCities = 100;

const convertCitiesDistanceIntoMeter = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities * 1000;
}

const convertCitiesDistanceIntoFeet = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities * 3280.84;
}

const convertCitiesDistanceIntoInches = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities * 39370.1;
}

const convertCitiesDistanceIntoCentimeter = (distanceBetweenTwoCities) => {
    return distanceBetweenTwoCities * 100000;
}

console.log(`Distance in Meter: ${convertCitiesDistanceIntoMeter(distanceBetweenTwoCities)}`);
console.log(`Distance in Feet: ${convertCitiesDistanceIntoFeet(distanceBetweenTwoCities)}`);
console.log(`Distance in Inches: ${convertCitiesDistanceIntoInches(distanceBetweenTwoCities)}`);


// Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const temperatureInFahrenheit = 100;

const convertTemperatureIntoCentigrade = (temperatureInFahrenheit) => {
    return (temperatureInFahrenheit - 32) * 5 / 9;
}

console.log(`Temperature in Centigrade: ${convertTemperatureIntoCentigrade(temperatureInFahrenheit)}`);


// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const quantity = 10;
const rate = 100;

const calculateAmount = (quantity, rate) => {
    return quantity * rate;
}

const calculateDiscountAmount = (quantity, rate) => {
    return calculateAmount(quantity, rate) * 10 / 100;
}

const calculateAmountAfterDiscount = (quantity, rate) => {
    return calculateAmount(quantity, rate) - calculateDiscountAmount(quantity, rate);
}

console.log(`Amount: ${calculateAmount(quantity, rate)}`);
console.log(`Discount Amount: ${calculateDiscountAmount(quantity, rate)}`);
console.log(`Amount After Discount: ${calculateAmountAfterDiscount(quantity, rate)}`);

// Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principalAmount = 1000;
const rateOfInterest = 10;
const numberOfYears = 2;

const calculateSimpleInterest = (principalAmount, rateOfInterest, numberOfYears) => {
    return (principalAmount * rateOfInterest * numberOfYears) / 100;
}

console.log(`Simple Interest: ${calculateSimpleInterest(principalAmount, rateOfInterest, numberOfYears)}`);

//  if you have any doubt please let me know in comment section.

//  Thank You.
