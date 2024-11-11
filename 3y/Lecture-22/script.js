function test()
{
    return new Promise((res,rej)=>{
        res();
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


console.log(Math.random());
console.log(Math.floor(1.9999));
console.log(Math.ceil(1.0001));
console.log(Math.ceil(Math.random()*10));
console.log(Math.floor(Math.random()*(55-50+1)+50));