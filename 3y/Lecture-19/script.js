// setTimeout(()=>{
//     console.log("function execute after 5 sec");
// },5000);
let id=setInterval(()=>{
    console.log("function will execute after every 2sec");
},2000);
console.log(id);

setTimeout(()=>{
    clearInterval(id);
},20000)