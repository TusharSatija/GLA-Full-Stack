let arr1=[1,2,3,true,"abc",4785.76,67676];
console.log(typeof(arr1));
console.log(arr1);

arr1.push(false)
// 8
// arr1
// Array(8) [ 1, 2, 3, true, "abc", 4785.76, 67676, false ]

arr1.unshift(10);
// 9
// arr1
// Array(9) [ 10, 1, 2, 3, true, "abc", 4785.76, 67676, false ]

arr1.pop()
// false
// arr1
// Array(8) [ 10, 1, 2, 3, true, "abc", 4785.76, 67676 ]

arr1.shift()
 
// Array(7) [ 1, 2, 3, true, "abc", 4785.76, 67676 ]


console.table(arr1);

console.log(arr1.reverse());

// join convert array into string;
let res=arr1.join(",");
console.log(res);
console.log(typeof(res));

//to convert string into arr

let ans=res.split(",");
console.log(ans);
console.log(typeof(ans));


let arr2=[10,20,30,40];
let data=arr1.concat(arr2);
console.log(data);
console.log(typeof(data));