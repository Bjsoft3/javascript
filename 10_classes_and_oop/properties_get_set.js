function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    })
}

const myUser = new User("user1@test.com", "admin123")
console.log(myUser.email);
