function fun()
{
    console.log("this is a normal function");
}   
fun();
let fun1=()=>{
    console.log("this is a arrow function");
}
fun1();
// let sq=(a)=>{
//     return a*a;
// }

let sq=(a)=>a*a;

console.log(sq(10));

//roll no -38


//write a function to get factorial of a number 
function factorial(n)
{
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact*=i;
    }
    return fact;
}
console.log(factorial(5));

// write a function to evaluate nCr;
// n!/r!*(n-r)!

let n=5,r=2;
let ans=factorial(n)/(factorial(r)*factorial(n-r));
console.log(ans);


let obj={
    name1:"abc",
    id:1212
}
console.log(obj);
console.log(obj.name1);
console.log(obj.id);










