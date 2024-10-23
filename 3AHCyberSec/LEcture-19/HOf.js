//HOF  higher order function

// when we pass a entire function as argument in another function is known as hof 

function fun(a)
{
    console.log("this is a fun function. ");
    a();
}
function test()
{
    console.log("this is a test function ");
}

fun(test);



//when we return entire inner function inside a outer function is known as hof 


// closures in js
function outer()  //HOF
{
    let a=0;
    function inner()
    {
        a++;
        console.log(a);
        console.log("this is a inner function");
    }
    return inner;
}

let res=outer();
res();
res();
res();
res();
res();