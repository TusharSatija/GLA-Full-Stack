function fun()
{
    console.log("hello");
}
function test(fun)
{
    a="abc";
    fun();
    let a=10;
    return a;
}

test(fun);