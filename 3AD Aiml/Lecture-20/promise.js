//fullfilled
function fun()
{
    return new Promise((res,rej)=>{
         res();
    })
}
console.log(fun());

// reject 
function fun1()
{
    return new Promise((res,rej)=>{
         rej();
    })
}


//pending
console.log(fun1());

function fun2()
{
    return new Promise((res,rej)=>{ 
    })
}
console.log(fun2());