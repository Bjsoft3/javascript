const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, currval) {
    // console.log(`aqcc: ${acc} and currval : ${currval}`);
    
    return acc + currval
}, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 1500,
    },
    {
        itemName: "py course",
        price: 1000,
    },
    {
        itemName: "php course",
        price: 2000,
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(priceToPay);
