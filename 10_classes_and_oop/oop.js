const user = {
    username: "Bhagirath",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function() {
        // console.log("Got user details from DB");
        // console.log(`Username is ${this.username}`);
    }
}

// console.log(user);
// console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = new User("bhagirath", 4, true)
const userTwo = new User("appu", 5, false)

console.log(userOne);
console.log(userTwo);
