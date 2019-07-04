// invetory  = {
//     gold : 500,
//     pouch : ['flint', 'twine', 'gemstone'],
//     backpack : ['xylophone', 'dagger', 'bedroll', 'bread loaf'],

// }
// invetory.pocket = ['seashell','strange bery', 'lint']

// console.log(invetory.pocket)
// inventory.backpack.splice(1, 2)
// console.log(invetory)
// inventory.gold(500)
// inventory.gold.push[50]
// console.log(invetory)



// Ex 2
prices = {
    banana: 4,
    apple: 2,
    orange:1.5,
    pear: 3,
}

stock = {
    banana: 6,
    apple: 0,
    orange: 32,
    pear: 15,
}
let  fruits = ['banana', 'appple', 'orange','pear']
fruits.forEach((food, index) =>{
    console.log(`${food}:
    price: ${price[food]};
    stock: ${price[food]});
})
let total = 0
fruits.forEach((food, index) => {

    x = price[food] * stock[food];

    console.log(`Value of ${food} = ${x}`);

    total += x;

})

console.log(`Total = ${total}`)