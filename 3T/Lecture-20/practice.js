let str="The sky is blue";
//op str="ehT yks si eulb";


let res=str.split(" ");
console.log(res);

let ans="";
for(let i=0;i<res.length;i++)
{
    ans=ans+res[i].split("").reverse().join("")+" ";
    console.log(res[i].split("").reverse().join(""));
}
console.log(ans)