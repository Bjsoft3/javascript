class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    
    get password() {
        return this.psw.toUpperCase();
    }

    set password(value) {
        this.psw = value;
    }
}

const bj = new User("ab@test.com","abc")

console.log(bj.password);
