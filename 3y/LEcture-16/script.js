// to perform a particular task repeatedly...


// add to number  call function

// ...
// ... 100 lines 
 
// add to number    call function



function sum(a,b)
{
    return a+b;
}

console.log(sum(2,5));   // function call


// wap to get sum upto n 
function sum_upto_n(n)
{
     return n*(n+1)/2
}

console.log(sum_upto_n(5));


// wap to get factorial of n

function factorial(n)
{
    let fact=1;
    for(let i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));

//  wap to get nCr value  -- >
    // n!/r!*(n-r)!;
    // n=5 , r=2
    // 5!/2!*3!


let n=5;
let r=2;
let ans= factorial(n)/(factorial(r)*factorial(n-r));
console.log(ans);

// let res=prompt("enter your name");
// console.log(res);
