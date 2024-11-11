function fun()
{
    return new Promise((res,rej)=>{
        let random_number=Math.floor(Math.random()*10);
        console.log(random_number);
        if(random_number%2===0)
        {
            res("even number");
        }
        else{
            rej("odd number");
        }
    })
}

// console.log(fun());
fun()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})



// download  ---- 3
// Compress  ----- 2
// upload ----- 1





