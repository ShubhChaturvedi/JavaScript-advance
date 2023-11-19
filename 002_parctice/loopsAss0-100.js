// Question-1: WAP that logs numbers from 1 to 10 to the console.

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// Question-2: WAP that log all even numbers from 2 to 20.

let j = 2;

while (j <= 20) {
    console.log(j);
    j += 2;
}


// Question-3: WAP that counts backward from 10 to 1 and logs the values.

let k = 10;

while (k >= 1) {
    console.log(k);
    k--;
}


// Question-4: WAP to calculate the sum of numbers from 1 to 5.

let sum = 0;
let l = 1;

while (l <= 5) {
    sum += l;
    l++;
}


// Question-5: WAP that prints powers of 2 (2^n) up to 64.

let m = 1;

while (m <= 64) {
    console.log(m);
    m *= 2;
}

// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess;

do {
    guess = prompt("Guess a number between 1 and 10");
}
while (guess != randomNumber);

alert("You guessed it!");

// Question-7: WAP to display the multiplication table (1 to 10) in the console.

let n = 1;

while (n <= 10) {
    let o = 1;
    while (o <= 10) {
        console.log(`${n} * ${o} = ${n * o}`);
        o++;
    }
    n++;
}

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).

let p = 0;

while (p <= 10) {
    if (p === 3) {
        p++;
        continue;
    }
    if (p === 5) {
        break;
    }
    console.log(p);
    p++;
}

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

let q = 1;

while (q <= 30) {
    if (q % 3 === 0 && q % 5 === 0) {
        console.log("FizzBuzz");
    } else if (q % 3 === 0) {
        console.log("Fizz");
    } else if (q % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(q);
    }
    q++;
}

// Question-10: WAP to identify and log prime numbers within a given range.

let r = 2;
range = 100;

while (r <= range) {
    let isPrime = true;
    let s = 2;
    while (s < r) {
        if (r % s === 0) {
            isPrime = false;
        }
        s++;
    }
    if (isPrime) {
        console.log(r);
    }
    r++;
}

//  if you have any doubt please let me know in comment section.

//  Thank You.
