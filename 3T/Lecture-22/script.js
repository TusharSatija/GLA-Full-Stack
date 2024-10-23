function fun()
{
    console.log("this is a normal function");
}

fun();
//Arrow function
let fun1=()=>{
    console.log("this is a normal function");
}
fun1();

function square(a)
{
    return a*a;
}
console.log(square(4));


let sqr=(a)=>a*a;

console.log(sqr(5));

// write to check a string is palindrome  or not


function palindrome(str)
{
    let n=str.length;  //n=4
    for(let i=0;i<n/2;i++)
    {
        if(str[i]!=str[n-1])
        {
            return false
        }
        n--;
    }
    return true;
}
let res=palindrome("abba");
let res1=palindrome("racecar");

console.log(res);
console.log(res1);