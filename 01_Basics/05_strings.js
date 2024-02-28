var userName = String("AnkurSingh")
var userAge = 24

// console.log(typeof userName);
// console.log(`User has userName is ${userName} and age is ${userAge}.`);

var userObject = new String(userName)
// console.log(typeof userObject);
// console.log(userObject.toUpperCase());
// console.log(userObject.charAt(3));
// console.log(userObject.indexOf('S'));

const stringOne = userObject.substring(5,1)
// console.log(stringOne);
const stringTwo = userObject.slice(-9,4)
// console.log(stringTwo);

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


