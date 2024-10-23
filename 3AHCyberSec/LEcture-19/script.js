let Person1={
    FirstName:"Rohit",
    sayName:function(){
        console.log(this.FirstName);
    }
}
let Person2={
    FirstName:"Rohan"
}

let res=Person1.sayName.bind(Person2);
res();