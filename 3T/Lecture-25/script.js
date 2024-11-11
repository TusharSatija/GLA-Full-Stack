// setTimeout
setTimeout(()=>{
     console.log("function will execute after 2sec");
},2000);


let id=setInterval(()=>{
    console.log("function will execute after every 1sec");
},1000);
console.log(id);

setTimeout(()=>{
    clearInterval(id);
},10000);