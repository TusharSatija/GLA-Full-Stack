let person={
    firstName:"rohit",
    Id:1212,
    isAdult:false
}


let p1=Object.create(person);
// p1.__proto__===person


let arr=[1,2,3,4,"abc",false];
// arr.__proto__===Array.prototype

let ISwinter=true;
// Iswinter.__proto__===Boolean.prototype
// Boolean.protype.__proto__===Object.prototype



let num=10;
num.__proto__===Number.prototype;
Number.protype.__proto__===Object.prototype


let str="";
str.__proto__===String.prototype;
String.protype.__proto__===Object.prototype



Object.prototype.__proto__===null 