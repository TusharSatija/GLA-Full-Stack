console.log(this);


function fun()
{
    console.log(this);
}
fun();

let fun1=()=>{
    console.log(this);
}
fun1();

let P1={
    id:1000,
    test:()=>{
        console.log(this.id);
    }
}
P1.test();

let P2={
    id:1001,
    test1:function(){
        console.log(this.id);
    }
}
P2.test1();

let Person1={
    firstname:"rohit",
    lastname:"kumar",
    say_full_name:function(){
        console.log(this.firstname +" "+this.lastname);
    }
}
let Person2={
    firstname:"saurav",
    lastname:"sharma",
}
Person1.say_full_name.call(Person2);
let res=Person1.say_full_name.bind(Person2);
res();

let user1={
    firstname:"abc",
    greet_user:function(greet){
        console.log(greet+" "+this.firstname);
    }
}
let user2={
    firstname:"xyz"
}
user1.greet_user.apply(user2,["welcome"]);





