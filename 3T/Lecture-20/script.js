let arr=[1,2,"abc",true,"xyz"];
console.log(arr.length);

console.log(typeof(arr));
console.log(arr);
console.table(arr);

// convert array into string 
let res=arr.join(" ");
console.log(typeof(res));
console.log(res);

//convert string into array

let ans=res.split(" ");
console.log(typeof(ans));
console.log(ans);