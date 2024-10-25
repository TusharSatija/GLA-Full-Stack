// when we pass an entire function as a argument in a function is known as hof
function fun(a)   //HOF
{
    let res=a();
    console.log(res);
    console.log("this is a fun function");
}

function test(){
    return "this is a test function";
}
fun(test);