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
const dateOfBirth = 1985;
// note that you cannot change the value of a 'const' variable. Trying to do so causes 'Uncaught TypeError: Assignment to constant variable.' Example below:
// dateOfBirth = 1985; is not allowed

// JavaScript will allow you to use 'var' instead of 'let' but this is old JavaScript and we should use 'let'. You can actually create a variable without using any,
middleName = 'Xavier';
// but this is terrible practice. Don't do it!!!  

//ARITHMATIC  OPERATORS
const now = 2020;
const ageMark = now - 1974;
const ageJenny = now - 1990;
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
// Convert to numbers, strings and booleans
// Type conversion = manually change
// Type Coercion = JavaScript makes the changes
// Note these functions start with a Capital first letter: Number, String, etc

//These are TYPE CONVERSIONS
const inputYear = '1991';
console.log(inputYear + 18); //Does not work because it takes the string from inputYear and treats 18 as a string, concatenating it to 1991 to reuslt in 199118.
// In order to make it work we use a function to convert inputYear yto a number:
console.log(inputYear); //This will output inputYear as a string
console.log(Number(inputYear)); //This will output inputYear as number 1991 rather than string '1991'. But NOTE this does not change the value of inputYear permanently, only for this instance.
console.log(Number(inputYear) + 18); // returns 2009 as requitred
//You cannot convert to a number, a string that does not in any way represent a number, such as 'Mark'
console.log(Number('Mark')); // retruns NaN (not a number - means invalid number!)
console.log(typeof NaN); // is actually a number
console.log(String(23)); // converts number to string

//THESE ARE TYPE COERCIANS
// JavaScript will make the change automatically, such as in this example, it converts the number 23 to a string and outs the entire code as a string
console.log('I am ' + 23 + ' years old'); // The '+' operator coerces the number to a string, same for TEMPLATE LITERALS.

console.log('23' - '10' - 3); // = 10 ->> The '-' operator converts strings to numbers
console.log('23' + '10' + 3); // = 23103 ->> The '+' operator converts the number to a string!
console.log('23' * '2'); // = 46 ->> The '*' operator converts the Strings to Numbers
console.log('23' / '2'); // = 11.5 ->> The '/' operator converts the Strings to Numbers
console.log('23' > '2'); // = true ->> The '>' operator converts the Strings to Numbers
// The '+' operator is the ONLY operator that converts Numbers to Strings and is used in concatenation

let n = '1' + 1; // Takes String '1', converts Number 1 to a String '1' and concatenates to return String '11' 
n = n - 1; // Takes string '11' and the '-' operator converts it to Number 11 then subtracts Number 1
console.log(n); // ->> n = 10
console.log(2 + 3 + 4 + '5'); // ->> String 95 because the Numbers are added to give 9 then, because five is a string, the '+' operator converts Nuber 9 to a String '9' and concatenates teh string '5'
console.log('10' - '4' - '3' - '2' + '5'); // --15 because 10-4-3-2=1 concatenate 5 = 15
// TYPE COERCIAN helps us make great and readable code.

//TRUTHY AND FALSY VALUES
// There are only 5 falsy values, 0,'empty string', undefined, null, NaN when converted to a Boolean
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Mark')); // not an empty string = true
console.log(Boolean({})); // empty object = true
// Conversion to Boolean is always TYPE COERCIAN, we never really use this in code, JavaScript uses it when working with Logical operators and logical context such as ifelse statements.

//In this example, in a logical statement, JavaScript will be looking for a 'true' condition so it looks at the value of 'money', coercing it to a Boolean value in the background. If 'mnoney' = 0 (which is a falsey value) the Boolean becomes 'false' for the 'if' function. Because it's not 'true' the 'else' statement runs. So when money = 0 = false = else = 'You should get a Job'. Anything other than '0' is 'true' and satisfied the 'if' statement so 'Don't spend it all' is returned. 
const money = 0;
if (money) {
  console.log("Don't spend it all ;"); 
} else {
  console.log('You should get a job!');
}

let height;
if(height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
console.log(typeof height); // if height is not defined then typeof = undefined = falsey
// However if Height = 0 this is still falsey so will also return the else statement, although the height is defined so this is buggy code and needs to be sorted.

// LESSON 22 EQUALITY OPERATORS
const ageUser = 18; // is an operator
if (ageUser === 18) console.log('You just became an adult'); // ==== is a compairon operator that does not COERCE so 18 === 18 is TRUE but '18' === 18 is FALSE! 
// == is a 'loose' equality oprator which will perform TYPE COERCIAN so that '18' == 18 generally for clean code we do not use loose equality operators. Always use strict equality ====. Even if you want Type Coercian it is best to convert first and ignore that == exists!!

const favouriteNumber = prompt("What is your favourite number?");
console.log(favouriteNumber); //returns '10' as a String

// but because the prompt returns a String we can't use it to check equality against a Number, such as: 
if (favouriteNumber === 23) {
  console.log('Cool! 10 is an amazing number!');
}

// Instead we can use Javascript function 'Number' to coerce the prompt string to a Number:
const newFavouriteNumber = Number(prompt("What is your New Favourite Number?"));
console.log(newFavouriteNumber);
console.log(typeof newFavouriteNumber);

if (newFavouriteNumber === 10) {
  console.log('10 is truly a GREAT number!');
} else if (newFavouriteNumber === 7) {
  console.log('7 is also a cool number'); // not only can we use 'if' and 'else' we can also use 'else if'
} else if (newFavouriteNumber === 12) {
  console.log("12 is my wife's favourite number"); // we can repeat 'else if' as many times as we want
} else {
  console.log('Number is not 10 or 7');
}

// !== is the 'different' operator or 'not equal to' 
if(newFavouriteNumber !== 10) console.log("what's wrong with 10?!");

//BOOLEAN LOGIC is a branch of Computer Science that uses True or False values to resolve complex logical problems. Used across all programming languages: And, Or & Not

// A: Sarah has a driver's licence
// B : Sarah has good vision

// Both A and B could be TRUE or FALSE. 
// AND is only satisfied if ALL statements are True, to give a True value. ALL are true
// OR is True if either A or B are True. One is true.
// NOT !A inverts true/false 

//EXAMPLE: If age = 16
//Statements
// A: Age is greater than or equal to 20 ->> false
// B: Age is less than 30 --> true

//!A NOT ->> inverse of false ->> true. Because it inverts the Boolean
// AND ->> gives false because not ALL are true. A 
// OR gives true because ONE is true
// !A AND B ->> true AND true = true
// A or !B ->> false or false (inverse of true) ->> false 

// note that the ! not operator has precedence

// LESSON 24 Logical Operators
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision); // AND
console.log(hasDriversLicence || hasGoodVision); // OR
console.log(!hasDriversLicence); // NOT (inverts the true statement to return false)

if(hasDriversLicence && hasGoodVision) { // sets the condition that both should be true
  console.log('Sarah is OK to drive');
} else {
  console.log('Somebody else should drive');
}

const isTired = false; // C
console.log(hasDriversLicence || hasGoodVision || isTired);

if(hasDriversLicence && hasGoodVision && !isTired) {
  console.log('Sarah is OK to drive');
} else {
  console.log('Somebody else should drive');
}

////////////////////////////////////
// LESSON 25 Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// 
// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 + 100) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log('Dolphins win!');
// } else if (avgScoreDolphins === avgScoreKoalas) {
//   console.log ("It's a draw!");
// } else {
//   console.log ('Koalas win!');
// }

//BONUS 2
// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 123) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);

// const minScore = 100;

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minScore) {
//   console.log('Dolphins win!');
// } else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= minScore) {
//   console.log ('Koalas win!');
// } else {
//   console.log ('Nobody wins!');
// }

//BONUS 2
const avgScoreDolphins = (97 + 112 + 101) / 3;
const avgScoreKoalas = (109 + 95 + 106) / 3;
console.log(avgScoreDolphins, avgScoreKoalas);

const minScore = 100;

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= minScore) {
  console.log('Dolphins win!');
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= minScore) {
  console.log ('Koalas win!');
}  else if (avgScoreDolphins === avgScoreKoalas && avgScoreKoalas && avgScoreDolphins > minScore && avgScoreKoalas >minScore) {
  console.log('Both win a trophy');
} else {
  console.log ('Nobody wins!');
}

//LESSON 26 THE SWITCH STATEMENT
// Alternative way to write a complicated 'if' statement.

const day = 'monday';

switch(day) {
  case 'monday': // day === 'monday' and if true execute teh following
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday;':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
}

// LESSON 27 STATEMENTS & EXPRESSIONS
// 3+4 is an expression, it produces a value
// 1996 is an axpression, it produces a value
// true && false && !false

// This overall code is a statement because it doe snot produce a value, it's like a compleyte sentance.
if (23 > 10) {
  const str = '23 is bigger'; // The string itself is an expression
}
// statements end in a seicolon ;

// In a Template Literal we can only insert an 'expression' (that would return a value) not a 'statement'.

//THE CONDITIONAL OPERATOR (Ternary Operator because it has three parts 'condition', 'if' and 'else')
// Similar to writing an if/else statement in one line
const donkey = 10;
donkey >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');
// Good for conditionally declaring variables, such as setting the value of a new variable called drink, all in one wine:
const drink = donkey >= 18 ? 'wine' : 'water';
console.log(drink);
// This is a far better coding method than using if/else, which would look like this:

let drink2; // declare the variable outside of the if/else statement
if(donkey >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

//We can use a Ternary Operator inside a Temperate Literal!
console.log(`I like to drink ${donkey >= 18 ? 'wine' : 'water'}`);

//The terneray operator does not replace if/else, but it is good for simple if/else

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = Number(prompt('Enter bill amount'));
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2; 
console.log(`The bill was £${bill}, you should tip £${tip} for a total bill of £${bill + tip}`);
