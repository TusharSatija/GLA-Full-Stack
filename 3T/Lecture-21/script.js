function  fun()
{
    console.log("this is a fun function ");
}

fun();
//function call

// ...1000 line of code 

// fun()


//write function to get sum of 2 values;

function add(a,b)
{
    return a+b;
}
console.log(add(2,8));
//sum of n natural number
//factorial of n 


function sum_of_n(n)
{
    return n*(n+1)/2;
}

console.log(sum_of_n(10));


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


// function to evaluate nCr;
//formula n!/(n-r)!*r!;

let n=5,r=2;
let ans=factorial(n)/factorial(n-r)*factorial(r);
console.log(ans);





