let arr1=[10,20,true,"abc"];
let arr2=[100,200,300,400];

console.log(typeof(arr1));
console.log(arr1);

//remove element at last
arr1.pop();
console.log(arr1);

//add element at last
arr1.push(100);
console.log(arr1);

// remove element at begin
arr1.shift();
console.log(arr1);

// add element at begin
arr1.unshift(200);
console.log(arr1);

let res=arr1.concat(arr2);
console.log(res);


// convert array into string
let ans=arr1.join(" ");
console.log(typeof(ans));
console.log(ans)

// convert string into array
let ans1=ans.split(" ");
console.log(typeof(ans1));
console.log(ans1);
