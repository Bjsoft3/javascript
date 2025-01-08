// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const name = "bhagirath"
let score = 100
let isLoggedIn = false
let outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 6786867876878678777979n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Bhagirath",
    age: 23,
}

const myFunction = function() {
    console.log("Hello world");
}

// https:262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let myYoutubeName = "bjsoftweb"
let anotherName = myYoutubeName

anotherName = "devbj"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bhagirath@test.com"

console.log(userOne.email);
console.log(userTwo.email);

