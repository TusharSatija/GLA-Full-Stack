let arr=[1,2,"abc",true,"xyz"];
console.log(typeof(arr));  //object
console.log(arr);

// insert element at last
arr.push(10);
console.log(arr);
//insert element at begin
arr.unshift(1000);
console.log(arr);
//remove element from last
arr.pop();
console.log(arr);
//remove element from begin
arr.shift();
console.log(arr);

console.log(arr.indexOf(true));

let arr2=[10,20,30,40];

console.log(arr.concat(arr2));


//convert arr into string 
let res=arr2.join(" ");
console.log(res);
console.log(typeof(res));

//convert string into array
let ans=res.split(" ")
console.log(ans);
console.log(typeof(ans));

//reverse an array
arr.reverse();
console.log(arr);


