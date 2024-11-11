// let h1=document.getElementsByName('h1');
let h1=document.querySelector('h1');
let h2=document.querySelector('#head');
let h3=document.querySelector('.abc');
let article=document.getElementById('art');
let para=document.getElementsByClassName('para');

h1.style.color="red";
h1.style.backgroundColor='yellow'


console.log(inp);
console.log(para);
console.log(article);
console.log(h2);
console.log(h1);
console.log(h3);


let inp=document.querySelector('input');
let btn=document.querySelector('button');
btn.addEventListener('click',(e)=>{
    console.log(inp.value);
    inp.value="";
})