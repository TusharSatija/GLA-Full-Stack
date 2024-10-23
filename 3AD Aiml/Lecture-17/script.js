console.log(this);



let obj1={
    name1:"abc",
    fun:()=>{
        console.log(this.name1);
    }
}
obj1.fun()

let obj2={
    firstname:"abc",
    lastname:"ghsgfdsd",
    Id:1212,
    fun:function(){
        console.log(`first name is ${this.firstname}`);
        console.log(`last name is ${this.lastname}`);
        console.log(`ID name is ${this.Id}`);
    }
}
obj2.fun();


function test()
{
    console.log(this);
}
test();

let test1=()=>this;
console.log(test1());


//call function in this

// const game = {
//     fullDetail: function () {
//       return this.title + " " + this.year;
//     },
//   };
  
//   const newGame = {
//     title: "Merlin",
//     year: 1994,
//   };
  
//   const fullDetail = game.fullDetail.call(newGame);
//   console.log(fullDetail); // Output: Merlin 1994
const game = {
    fullDetail: function (greet,test12) {
      return `${greet} ${test12} ${this.title} ${this.year}`;
    },
  };
  const newGame = {
    title: "Merlin",
    year: 1994,
  };
  
  const fullDetail = game.fullDetail.apply(newGame, ["Welcome" ,"hello"]);
  console.log(fullDetail); // Output: Welcome Merlin 1994

  
   

  const player = {
    name: "Rooney",
    jerseyNumber: 10,
    introduction: function () {
      console.log(this.name + "wears Jersey number " + this.jerseyNumber + ".");
    },
  };
  const player2 = {
    name: "Jimmy ",
    jerseyNumber: 18,
  };
  
  let result = player.introduction.bind(player2);
 
  result();