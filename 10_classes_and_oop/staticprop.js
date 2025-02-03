class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const devbj = new User("bhagirath")
console.log(devbj.createId());
