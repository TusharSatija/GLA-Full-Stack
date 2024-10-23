//Normal function
function fun()
{
    return "this is a fun function"
}
console.log(fun());

//arrow function
let fun1=()=>{
    return "this is a arrow fun function"
}
console.log(fun1());


let sum=(a,b)=>a+b;
console.log(sum(3,7));


let square=a=>a*a;

console.log(square(4));


let p1={
    Id:1212,
    test:function()
    {
        console.log("this is a test function inside obj p1");
    }
}
p1.test();