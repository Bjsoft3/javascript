class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, psw) {
        super(username);
        this.email = email;
        this.psw = psw;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("dev", "dev9239@test.com", "123")
chai.addCourse()

const tea = new User("devbj")
chai.logMe();
