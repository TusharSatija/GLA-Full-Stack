let str="The sky is blue";
//op1 str = "blue is sky the";
//op  str="ehT yks si eulb";


let ans=str.split(" ").reverse().join(" ");
console.log(ans);

let ans2=str.split(" ");
let str1="";
for( let i=0;i<ans2.length;i++)
{
    str1=str1+ans2[i].split("").reverse().join("")+" ";
    // console.log(res);
}
console.log(str1);



