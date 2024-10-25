// setTimeout( function,Time)


// setTimeout(()=>{
//     console.log("hello");
// },5000);

// setTimeout(()=>{
//     clearInterval(id);
// },5000);

let id=setInterval(()=>{
    console.log("run after every 2 second");
},2000)
console.log(id);