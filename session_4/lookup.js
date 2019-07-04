// const teencode = {
//     hc: "hoc",
//     ng: "nguoi",
//     pt: "phuong trinh",
//     ns: "noi",
//     ngta: "nguoi ta",
//     lm: "lam",
//     r: "roi",
// }

// const words = Object.keys(teencode)
// // let code = prompt("Your code?")
// words.forEach((word, index) => {
//     console.log('${index +1}.${word}');
// })
// console.log(teencode[code])
// if (teencode.hasOwnProperty(answer)) {
//     console.log(teencode[answer]);

// } else {
//     const y0rN= prompt("Contribute (y/n)").toLowerCase();
//     if (y0rN === 'n'){
//         console.log("good bye")

//     } else if (y0rN === "y"){
//         const meaning = prompt("meaning")
//         teencode[answer] = meaning;
//     }
// } 
// const neword = Object.keys(teencode)
// neword.forEach((word, index) =>{
//     console.log('${index +1}.${word}')
// })
// const answer = prompt("Add to dictionary")
// if(answer ==="n"){
//     console.log("good bye")
// } else if(answer ==="y"){
//     console.log()
// }
// console.lof(teencode.hasOwnProperty('ns'))

// const word = "champion";
// let a = (word.split(""));
// let displayA = []

// while (a.length > 0){
//     const randomIndex = Math.floor(Math.random()*a.length)
//     const characters = a[randomIndex]
//     displayA.push(characters)
//     a.splice(randomIndex, 1);
// }
// const displayWord = displayA.join(" ")
// const answer = prompt("Your answer")
// if (answer === word){
//     console.log("Hura")
// } else {
//     console.log("Wrong")
// }


const company = [
    {
    name: "dung",
        salary: 50000,
        hour: 5,
        days:15,
    },
    {
        name :"duc",
        salary: 80000,
        hour: 7,
        days: 25,
    },
    {    
        name:"phong",
        salary: "60000",
        hour: 2,
        days: 30,   
    }
]
console.log(company[2].name);
let totalSalary = 0
company.forEach((person, index) =>{
    const salary = person.salary * person.hour*person.days;
    console.log(`Luong cua ${person.name} la ${salary}`)
    totalSalary +=salary;
    // totalSalary = totalSalary +salary
})
console.log(`Tong luong cua 3 nguoi la ${totalSalary}`)