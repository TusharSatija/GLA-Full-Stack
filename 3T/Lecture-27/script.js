function test()
{
    return new Promise((resolve,reject)=>{
        resolve();
    })}
console.log(test());
function fun()
{
    return new Promise((res,rej)=>{
        rej();
    })}
console.log(fun());
function test1()
{
    return new Promise((res,rej)=>{

    })
}
console.log(test1());