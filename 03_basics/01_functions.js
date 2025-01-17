function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2)

    let result = number1 + number2
    return result;
}

// addTwoNumbers(2, 3)
const result = addTwoNumbers(4, 5);
// console.log("result : ", result);

function loginUserMessage(userName = "sam") {
    if (!userName) {
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Bhagirath"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "bhagirath",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondaValue(getArray) {
    return getArray[1]
}

console.log(returnSecondaValue(myNewArray));
