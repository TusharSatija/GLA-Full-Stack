console.log(this);

function test()
{
    console.log(this);
}
test();
let test1=()=>{
    console.log(this);
}
test1();


let p1={
    name1:"rohit",
    sayname:()=>{
        console.log(this.name1);
    }
}
p1.sayname();

let p2={
    name2:"rohan",
    sayname:function(){
        console.log(this.name2);
    }
}
p2.sayname();

let person1={
    name:"abcd",
    sayname:function()
    {
        console.log(this.name);
    }
}
let person2={
    name:"xyz"
}
person1.sayname.call(person2);
let res=person1.sayname.bind(person2);
res();

let per1={
    name:"abcd",
    sayname:function(greet)
    {
        console.log(greet+" "+this.name);
    }
}
let per2={
    name:"xyz"
}
per1.sayname.apply(per2,["welcome"]);

