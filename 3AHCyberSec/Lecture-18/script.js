let str="The sky is blue";
// op str="ehT yks si eulb";
// op1 str ="blue is sky The";

let res=str.split(" ");
let str1="";
for(let i=0;i<res.length;i++)
{
    str1=str1+res[i].split("").reverse().join("")+" ";
    // console.log(res[i].split("").reverse().join(""));
}

console.log(str1);
let ans=str.split(" ").reverse().join(" ");
console.log(ans);



// this keywords 
console.log(this);


let user={
    name1:"Rohit",
    fun: ()=>{
        console.log(this.name1);
    }
}
user.fun();

let user1={
    name1:"Rohit",
    fun: function(){
        console.log(this.name1);
    }
}
user1.fun();

function test1()
{
    console.log(this);
}
test1();

let res2=()=>{
    console.log(this);
}
res2();


let Person1={
    sayname:function()
    {
        return this.name;
    }
}
let Person2={
    name:"abc"
}
console.log(Person1.sayname.call(Person2));


let Per1={
    sayname:function(greet)
    {
        return greet+" "+ this.name  ;
    }
}
let Per2={
    name:"abc"
}
console.log(Per1.sayname.apply(Per2,["welcome"]));



let p1={
    id:1212,
    say_person_id:function()
    {
        return this.id;
    }
}
let p2={
    id:2121
}
console.log(p1.say_person_id.bind(p2));