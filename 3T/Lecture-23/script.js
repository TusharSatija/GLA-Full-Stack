console.log(this);
function test()
{
    console.log(this);
}
test();
let res=()=>{
    console.log(this);
}
res();
let obj={
    name:"abc",
    fun:function(){
        console.log(this.name);
    }
}
obj.fun();

let obj1={
    name1:"xyz",
    fun1:()=>{
        console.log(this.name1);
    }
}
obj1.fun1();


let p1={
    id:1212,
    tell_id:function(){
        console.log(this.id);
    }
}

let p2={
    id:1234
}
p1.tell_id.call(p2);



let person1={
    id:1212,
    tell_id:function(greet){
        console.log(greet+" "+this.id);
    }
}

let person2={
    id:1234
}
person1.tell_id.apply(person2,["welcome"]);