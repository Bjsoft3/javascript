/*
// if
const isUserloggedIn = true
const temperature = 60

if (temperature < 50) {
    console.log("Less than 50");
} else {
    console.log("Temperatuer is greater than 50");
    
}

// <, >, <=, >=, ==, !=, ===, !==
*/

/*
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);
*/

// const balance = 1000

// if (balance > 500) console.log("test"); // Do not write like this ever

// if (balance < 500 ) {
//     console.log("less than")
// } else if (balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than ");
// }

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}