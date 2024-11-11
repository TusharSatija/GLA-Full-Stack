function test()
{
    return new Promise((resolve,reject)=>{
        resolve();
    })
}
console.log(test());
function test1()
{
    return new Promise((res,rej)=>{
        rej();
    })
}
console.log(test1());
function test2()
{
    return new Promise((res,rej)=>{
         
    })
}
console.log(test2());


let random_number=Math.random();
console.log(random_number);
