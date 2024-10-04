// selectors

// 1)by idName
// const a=document.getElementById("h1");
// a.innerText="Hello kiran"//it is used to change the text of html
// a.style.color="red";
// a.style.backgroundColor="pink"

// 2)by className
// const a=document.getElementsByClassName("heading2");
// for(let i=0;i<a.length;i++){
//     a[i].innerText="I am somesh"
//     a[i].style.color="pink"
// }

// 3)by tag name
// let a=document.getElementsByTagName("h2");
// for(let i=0;i<a.length;i++){
//     a[i].style.color="Green"
// }

// 4)by query selector
// const a=document.querySelector("#h1");
// a.style.color="pink"
// const b=document.querySelectorAll(".heading2");
// b.forEach((heading) => {
//     heading.style.backgroundColor="yellow"
    
// });

//Travesing dom
 let list=document.querySelector("ul" );
 console.log(list);
 list.style.color="red"
 
console.log(list.children);
console.log(list.parentElement);
console.log(list.previousElementSibling);
console.log(list.nextElementSibling);




