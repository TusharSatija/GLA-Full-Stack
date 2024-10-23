let arr=[10,20,true,"abc",400];
console.log(arr);
console.log(typeof(arr));

//insert element at last
arr.push(100);
console.log(arr);

//delete element at last
arr.pop();
console.log(arr);

//delete element from begin 
arr.shift();
console.log(arr)

//insert element at begin;
arr.unshift(5);
console.log(arr);

console.log(arr.indexOf(20));


let arr2=["abc",false,30,40,50];


let res=arr.concat(arr2);
console.log(res);

//to convert array into string 
let res1=arr2.join(" ")
console.log(typeof(res1))
console.log(res1)

// to convert string into array
let ans1=res1.split(" ");
console.log(typeof(ans1))
console.log(ans1)

console.log(arr.reverse());