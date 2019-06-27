// let age ="21";
// if (age < 10) {
//     console.log("baby");
// } 

// else if (age<18) {
//     console.log("Teenager");

// }

// else {
//     console.log("adult");
// }

//  for (let x = 1,x <100, x+=2 ) {
    
// }

// for (let x = 1; x < 101; x++) {
//     if (x% 2 === 0) {
//         console.log(x);
//     }
// }    
// let a = Number(prompt("a:"))
// let b = Number(prompt("b:"))
// let c = Number(prompt("c:"))
// const d = Number(b*b -4*a*c )
// if (d === 0) {
//     console.log("Mot nghiem kep")
//     const x = -b / (2*a);
//     // console.log('Nghiem kep la ${x}') backticks

// }
// else if (d < 0) {
//     console.log("Vo nghiem")
// }
// else if (d > 0) {
//     console.log("2 nghiem");
//     const x1 = (-b -d**0.5) / (2*a);
//     const x2 = (-b +d**0.5) / (2*a);
//     console.log('Nghiem kep la ${x1} va ${x2}');
// }

// const x = prompt("Enter x:")
// let isPrime = true;
// if(x <2) {
//     isPrime = false;
// }   else {  
//     for (let i = 2;i<x; i++) {
//         if(x % i === 0)
//             isPrime = false  
//             break;
//         }   
//     }

// if (isPrime) {
//     console.log("Prime number")

// }   else {
//     console.log("Not prime number")
// }

// for(;;) {
//     console.log("ahihi");
// }


// const x = Math.floor(Math.random() * 101)+1;
// for(;;) {
//     let numb = prompt("Enter a number(1-100):")
//     if (numb > x) {
//         console.log("To qua")   
//     } else if (numb < x ) {
//         console.log("Be the")
//     } else {
//         console.log("Chuan")
//         break
//     }
// }

let low = 0;
let high = 100;

for(;;){
    let mid = Math.floor((low + high)/2);
    console.log(mid)
    let answer = prompt("ANSWER???").toLowerCase();

    if (answer === "s") {
        low = mid;
    }   else if (answer === "l") {
        high = mid;
    }   else if (answer === "c") {
        console.log("I knew it")
        break;

    }
}

