// Singleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Bhagirath",
    "full name": "Bhagirath Rajpurohit",
    [mySym]: "myKey1",
    age : 23,
    location: "Jalore",
    email: "bhagirath@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", 'Saturday']
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "bhagirath.chattest.com"
// Object.freeze(JsUser)
JsUser.email = "bjtestmail@test.com"
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello JS users");
}

JsUser.greetingsTo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTo());
