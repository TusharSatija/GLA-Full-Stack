let Person={
    // key:value 
    Name:"xyz",
    age:18
}
console.log(Person.Name);
console.log(Person.age);


function  add(a,b)
{
    return a+b;
}
let res=add(2,4);
console.log(res);


function factorial(n)
{
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}
let n=5;
let r=3;
let res1=factorial(n)/factorial(n-r);
console.log(res1);



let sum=(a,b)=>{
    return a+b;
}
console.log(sum(3,7))
let data=a=>a+10;






