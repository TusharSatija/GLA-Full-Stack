setTimeout(()=>{
    console.log("function execute after  3 sec");
},3000);



let id=setInterval(()=>{
    console.log("function will execute after every 1 sec");
},1000);
console.log(id);


setTimeout(()=>{
    clearInterval(id);
},10000);