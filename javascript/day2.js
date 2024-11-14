// console.log('first');
// console.log("Let's go");

// let myName = "Kyaw Kyaw"
// console.log(`my name is ${myName}`);

// let fruits = ["apple","orange","grapes"];

// console.log(fruits , fruits[0]);


// fruits[0] = "coconut";

// console.log(fruits, fruits[0]);

// let obj = {
//     name : "Kyaw Kyaw 2",
//     age : 40,
//     job : "Designer"
// }
// console.log("Normal",obj)


// obj.city =  "Yangon"
// obj.fav = "Windows Laptop"

// console.log("Two Property Added",obj)

// obj.age = 30;
// obj.name = "Aung Aung";
// console.log("Overwrite Obj",obj)


// function calculateAge(birthYear,name){
//     let currentYear = 2024;
//     let age = currentYear - birthYear;
//     let mySelf = `my name is ${name} and ${age} years old`
//     return mySelf;
// }



// console.log(calculateAge(2003,"Kyaw Kyaw"));

let x = 5;
let y = 4;
console.log(x);

x += 10


console.log(x);

x -= 10;
console.log(x)


function incrementCounter(){
    let counter = 0;
    return function (){
        return ++counter;
    }
}
let myCounter = incrementCounter()
console.log(myCounter()) 
console.log(myCounter()) 
console.log(myCounter()) 


// Regluar function 
// function name (){}  

// Anonymous Fucntion 
// let myFun = function (){}

// arrow function 
// const name = () => {}


function hello2 (name) {
    return name;
}
const hello = (name) => name

console.log(hello2("Kyaw2"));
console.log(hello("Kyaw"))