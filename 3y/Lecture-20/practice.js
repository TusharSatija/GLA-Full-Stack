let P1={
    name1:"abc",
    Id:1212
}
console.log(P1.name1);

let P2= new Object(P1);
console.log(P2.name1);



let arr=[1,2,3,4];
 arr.__proto__===Array.prototype
// true
Array.prototype.__proto__===Object.prototype
// true 

let IsRainy=true;
console.log(IsRainy.__proto__===Boolean.prototype);
console.log(Boolean.prototype.__proto__===Object.prototype);