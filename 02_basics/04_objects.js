// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Bhagirath",
            lastName: "Kumar",
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1, 
        email: "b@gmail.com"
    },
    {
        id: 2, 
        email: "b2@gmail.com"
    },
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

// console.log(instructor);


// {
//     "name" : "bhagirath",
//     "coursname": "js course",
//     "price": "free"
// }

[
    {},
    {},
    {}
]