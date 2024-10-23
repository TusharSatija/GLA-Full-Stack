console.log(this);
function fun()
{
    console.log(this);
}
fun()

let fun1=()=>{
    console.log(this);
}
fun1();

let obj1={
    name1:"abc",
    fun1:()=>{
        console.log(this.name1);
    }
}
obj1.fun1();

let obj2={
    name1:"xyz",
    fun2:function(){
        console.log(this.name1);
    }
}
obj2.fun2();


let person={
    Name:"rohit",
    Id:1212,
    sayname:function(){
        console.log(this.Name+" "+this.Id);
    }
}
let person1={
    Name:"rohan",
    Id:1221   
}
person.sayname.call(person1);

//this bind will return a new function;
let ans=person.sayname.bind(person1);
ans();

let user={
    Name:"rohit",
    Id:1234,
    sayname:function(greet,abc){
        console.log(greet+" "+abc+" "+this.Name+" "+this.Id);
    }
}
let user1={
    Name:"rohan",
    Id:4321   
}
user.sayname.apply(user1,["Welcome" ,"Hello"]);