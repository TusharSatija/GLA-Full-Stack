let str="The sky is blue";
let ans=str.split(" ").reverse().join(" ");;

console.log(ans);

//op ehT yks si eulb

let res=str.split(" ");
console.log(res);
let str1="";

for(let i=0;i<res.length;i++)
{
    str1=str1+res[i].split("").reverse().join("")+" ";
    console.log(res[i].split("").reverse().join(""));
}

console.log(str1);

//object -> key-value pair

let Person={
    name1:"abc",
    age:19
}
console.log(Person);
console.log(typeof(Person));
console.log(Person.age);
console.log(Person.name1);




//function 

function sum1(a,b)
{
    let c=0;
    c=a+b;
    return c;
}

console.log(sum1(12,23));
console.log(sum1(5,"abc"));


// write a function to get sum_upto_n
// write a function to  get factorial of a number
//write a function to  get value of nCr 
//n!/r!(n-r)!





