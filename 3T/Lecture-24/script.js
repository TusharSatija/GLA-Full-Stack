// when we pass an entire function as an argument in a function is knowns as hof

function test(a)
{
    let res=a();
    console.log(res);
    console.log("this is a test function");
}
function fun()
{
    return "this is a fun function";
}
test(fun);


//when we return an inner function inside an other function is known as HOF
function outer()
{
    function inner()
    {
        console.log("this is a inner function");
    }
    return inner;
}
let ans=outer();
ans();


//closures
function outer1()
{
    let a=0;
    function inner()
    {
        a++;
        console.log(a);
    }
    return inner;
}
let res=outer1();
res()
res()
res()
res()
res()
res()