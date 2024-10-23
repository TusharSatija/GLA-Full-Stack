let str="The sky is blue";
//op    blue is sky The

// convert str to arr 
let res =str.split(" ").reverse().join(" ");
console.log(res);


// op ehT yks si eulb
let  ans= str.split(" ");
console.log(ans);

let res1=""
for( let i=0;i<ans.length;i++)
{
    res1+=ans[i].split("").reverse().join("")+" ";
    // console.log(ans[i].split("").reverse().join(""));
}

console.log(res1)
