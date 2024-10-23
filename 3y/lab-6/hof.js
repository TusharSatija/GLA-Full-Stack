//hof higher order function

//when we pass a function as a argument inside another function is known as Hof.

function test(a)
{
    a();
    console.log("this is a test function");
}
function test2()
{
    console.log('this is a test2 function');
}
test(test2);

//when we return an another complete function inside a function is known as HOF.


function HOF(){

    function inner(){
        console.log("this is a inner function");
    }
    return  inner;
} 
let res=HOF();
res();