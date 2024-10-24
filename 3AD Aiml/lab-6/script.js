//when we pass a function as a argument in another function is known as HOF. (higher order function);


function fun(a)
{
    console.log("this is a fun function");
    a();
}
function test()
{
    console.log("this is a test function");
}
fun(test);


// when an outer function return an entire inner function is also known as HOF.

function outer()
{
    function inner()
    {
        console.log("this is a inner function..");
    }
    return inner;
}
let res=outer();
res();


function outer()
{
    let a=0;
    function inner()
    {
        a++;
        console.log(a);
    }
    return inner;
}
let data=outer();
data()
data()
data()
data()
data()
data()

