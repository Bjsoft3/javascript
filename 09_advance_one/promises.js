// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async
//     // DB calls, cryptographyl, network
//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function() {
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve()
//     }, 1000);
// }).then(function() {
//     console.log("Async 2");
// })

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve({userName: "Chai", email: "chai@example.com"});    
//     }, 1000);
// })

// promiseThree.then(function(data) {
//     console.log(data);
// })

// new Promise(function(resolve, reject) {
//     let error = false;
//     if (!error) {
//         resolve({username: "Bhagirath", psw: "123"})
//     } else {
//         reject("Error: Something went wrong!")
//     }
// })
// .then(function(user) {
//     console.log(user);
//     return user.username
// })
// .then(function(useraname) {
//     console.log(`Username is ${useraname}`);
// })
// .catch(function(err) {
//     console.log(err);
// }).finally(function() {
//     console.log('Execution done');
// })

// const promiseFive = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({username: "Javascript", psw: "123"})
//         } else {
//             reject("Error: JS went wrong!")
//         }
//     }, 1000);
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }    
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})