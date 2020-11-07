// USE CMD+/ TO COMMENT OUT CODE 

// LECTURE: VALUES & VARIABLES. 
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Mark');
console.log(23); // the value inside the parantheses is a 'value')

// we can store values inside a variable by declaring it in a variable 

let firstName = "Mark"; // Think of a variable as a box, in which we store values 
console.log(firstName); // we can call on the value by using the variable name 
console.log(firstName);
console.log(firstName);

// storing a value inside a variable makes it easy to call on multiple instances of teh variable and makes it esy to change the value of teh variable in one place 

/* NAMING VARIABLES 
1. Use camelCase as preferred notation
2. Cannot start the name of a variable with an integer, such as '3years'. = SyntaxError
3. Variables can only contain numbers (not starting), letters, underscores or $
4. Cannot (or should not) use a 'reserved' JS keyword. Such as 'new', 'function', name. 
5. Should not start variable names with Uppercase letters such as 'Person'. These should be reserved for Object Oriented Names. 
6. Should not use ALL CAPS as this is reserved for real constants that do not change in value. Such as 'let PI = 3.14'
7. Ensure names are easy to understand what value the variable is holding. eg, myFirstJob = 'programmer'; myCurrentJob = 'teacher'; Not job1 = 'programmer'; job2 = 'teacher';.
*/

let myPreviousJob = 'Managing Director';
let myNextJob = 'Freelance Coder';

console.log(myNextJob);

/* LECTURE: Values and Variables. 
ASSIGNMENT
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

let country = 'England';
let continent = 'Europe';
let population = '67,886,011';

console.log("I live in " + country);
console.log("Situated in " + continent);
console.log("Where the population in 2020 is, " + population);

/* LECTURE: Data Types 

These are primitive data types: 
1. NUMBER - these are always floating point numbers used for decimals and integers eg 'let age = 21;'
2. STRING - Sequence of characters used for text 'let firstName = 'Mark';
3. BOOLEAN - Logical type that can only be TRUE or FALSE. Used for taking decisions. let fullAge = true;
4. UNDEFINED. Value taken by a avariable that is not yet defined ('empty value) like ' let children';
5. NULL - Also an empty value
6. SYMBOL = Value is unique and cannot be changed 
7. BIGINT - Integers too large to be a Number type
NOTE: THERE IS NO NEED TO MANUALLY DEFINE THE DATATYPE. THE VALUE HAS TEH TYPE, NOT THE VARIABLE!
This is Dynamic typing, so we can redfine a value to a variable and teh datatype can change from say a number to a string.
*/

true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

// 'typeof' is an operator (just like +, or *, or -) and is used to find the 'type' of a value.
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 46);
console.log(typeof 'Mark');

// When we declare a new variable we have to use 'let' (*)or 'var' or 'const'. But we can change the value of a variable by calling its name such as below - DO NOT USE 'let' again:

let theBestCoderInTheWorld = 'Dolly';
console.log(theBestCoderInTheWorld);
theBestCoderInTheWorld = 'MARK FREEMAN!';
console.log(theBestCoderInTheWorld);

// We can also use the same method to change the TYPE of the value eg; from say, a STRING to a NUMBER:
let favoriteNumber = '7';
console.log(typeof favoriteNumber);
favoriteNumber = 7;
console.log(typeof favoriteNumber);

//UNDEFINED
let rabbit;
console.log(rabbit);
console.log(typeof rabbit);

// reassign variable
rabbit = 1974;
console.log(typeof rabbit);

// NULL. Note that typeof 'null' should return 'null' BUT there's a bug in JavaScripyt which returns null's type as 'object'!!! Beware!!!
console.log(typeof null); 

// LECTURE: let, const and var
// ASSIGNMENT
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

let language = 'English';
const dateOfBirth = 1974;
// note that you cannot change the value of a 'const' variable. Trying to do so causes 'Uncaught TypeError: Assignment to constant variable.' Example below:
// dateOfBirth = 1985; is not allowed

// JavaScript will allow you to use 'var' instead of 'let' but this is old JavaScript and we should use 'let'. You can actually create a variable without using any,
middleName = 'Xavier';
// but this is terrible practice. Don't do it!!!  

//ARITHMATIC  OPERATORS
const now = 2020;
const ageMark = now - 1974;
const ageJenny = now - 1985;
const ageIlly = now - 2009;
const ageKit = now - 2011;
console.log(ageMark, ageJenny, ageIlly, ageKit);

console.log(ageMark * 2, ageJenny / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3.

const lastName = 'Freeman';

console.log(firstName + ' ' + lastName); //concatenate strings with  '+'

//ASSIGNMENT OPERATORS
let x = 10 + 5; //x = 15
x += 10; // is short form way of writing 'x = (x + 10) = 25'
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// COMPARISON OPERATORS used tp generate BOOLEAN values
console.log(ageMark > ageJenny); //is Mark older than Jenny = True >, <, >=, <=
console.log(ageJenny >= 18); // is Jenny aged 18 or older = True

const isFullAge = ageJenny >= 18;

// OPERATOR PRECEDENCE establishes the order in which calculations an comparisons are made
// Go to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence and see Table of precedence from 21 to 1.

let a, b;
a = b = 25 - 10 - 5; // a = b = 10, a = 10
console.log(a, b);

const averageAge = (ageMark + ageJenny) / 2;
console.log(averageAge);

// BMI = mass / height ** 2
const weightMark = 102
const heightMark = 1.78
const bmiMark = weightMark / (heightMark ** 2);

const weightJohn = 92
const heightJohn = 1.95
const bmiJohn = weightJohn / (heightJohn ** 2);
console.log(bmiMark, bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// STRINGS - TEMPLATE LITERALS
// Makes writing long or complex strings much easier!

const birthYear = 1974;
const markFreemanBio = "I'm " + firstName + ', a ' + (now - birthYear) + ' year old ' + myNextJob + '!';
console.log(markFreemanBio); // The first string in this concatenation using double quotes to prevent the apostrophe escaping. This can be a pain

// Starting with ES6 we can use TEMPLATE LITERALS
const markNew = `I'm ${firstName}, a ${now - birthYear} yr old ${myNextJob} from ${country}`; // using back ticks tells JavaScript we are using a LITERAL STRING by writing the string as standard and then inserting the variable inside ${}. We can also run calculations using same method.
console.log(markNew);

// *TIPS* *TIPS* *TIPS* *TIPS* 
// Some coders use ` ` back ticks for all strings to prevent the need to make a choice between ' '  and " ".
// This technique can be used to write strings across multiple lines. Ideal for when we create HTML with JavaScript!!!
console.log(`String
on multiple 
lines`);

//MAKING DECISIONS
// Test if Sarah is old enough to drink alcohol. If not, how long does she have to wait. 
const age = 15
// const isOldEnough = age => 18;

// if(isOldEnough) {
//   console.log('Sarah can drink! 🥂') //CMD CTRL SPACE
// }

// add an ELSE block to make an IF ELSE control structure.
if (age >= 18) {
  console.log ('Sarah can drink! 🥂');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is not old enough to drink 🔞. Wait another ${yearsLeft} years`);
}

//The IF ELSE Control Block gives us more control over code. There are other control structures too.

//  if(){
//  } else {
//  }

// Another IF ELSE example

const dobYear = 1996;

let century; // note: we have to pre-define the variablle century without a value and then assign a value to it through the logic. This is because we have to define the variable outside of a CODE BLOCK, anything created inside the code block is not accessible outside the block. Creating it outside gives us access to it anywhere.
if (dobYear <= 2000) {
  century = 20; // here we assign the value
} else {
  century = 21;
}
console.log(century);

// CODING CHALLENGE using 'if/else' statement.
/*  const weightMark = 102
    const heightMark = 1.78
    const bmiMark = weightMark / (heightMark ** 2);

    const weightJohn = 92
    const heightJohn = 1.95
    const bmiJohn = weightJohn / (heightJohn ** 2);
    console.log(bmiMark, bmiJohn);

    const markHigherBMI = bmiMark > bmiJohn;
*/

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`); // here we assign the value
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// LESSON 20 TYPE CONVERSION AND COERCION
