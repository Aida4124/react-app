// let is we want to change the variable between line of codes 
/* let age = 25;
let year = 2019;

console.log(age, year);
age = 30;

console.log(age, year);
year = 2018;
console.log(age, year); 
 */
//Data types 
//STRINGS ------------------------
console.log("hello");

let firstName = "aidan";
let lastName = "bouzekri";

let fullName = firstName + " " + lastName;

console.log(fullName);

//geting certain characther 
console.log(firstName[0]);

// getting length 
console.log(firstName.length);

// string methods 
//upper case 
console.log(firstName.toUpperCase());

//storing the result into another variable 
let result = firstName.toLocaleLowerCase();
console.log(result, firstName);

//indexOf to find the index of a string

let index = firstName.indexOf('d');
console.log(index);

//COMON STRING METHODS  
let email = ('bouzekri@gmail.com');


//NUMBERS --------------------------------

//math operation -- + ,-,/,*,**,%

//order of operations -- B I D M A S --> () , ** , / , * , + , -


likes = 10;
likes++;
likes--;
likes += 10;
likes -= 2;
likes *= 2;
likes /= 10;
console.log(likes);

//NaN === Not a number

console.log(5 * 'hi');

// template string way to concatenate multiple 

const title = 'heroes';
const author = 'marios';
const like = 10;


let results = `the title is ${title} by ${author} has ${like} likes `;
console.log(results);

//Creating html template 

let html = ` <h2>${title}</h2>
<p>by ${author}</p>
<span>has ${like} likes</span>`

console.log(html);




