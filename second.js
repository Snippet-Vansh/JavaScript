// function handleClick(){
// document.getElementById("first");
// element.textContent = "THIS IS END";
// }'


// const element = document.getElementById 


// element.onclick = function handleCLick(){
//     element.textContent = "THIS IS END";
// }

// element.onclick = function handleClick(){
//     element.
//     textContent = "ARE YOU HERE";
//     element.style.BackgroundColor = "red";
// }

// element.addEventListener("mouseenter",() => {
//      element.textContent = "ARE YOU HERE";
//     }) 

// element.addEventListener("mouseenter",() => {
//      element.style.backgroundColor = "orange";
//     })

//    const child = document.getElementById("child1")
//    child.addEventListener('click',() => {
//     child.textContent = "I am clicked"
//    })

// const parent = document.getElementById("parent")
// console.log(parent)

// for(let child of parent.children){
//     child.addEventListener('click',() =>{
//         child.textContent ="Iam clicked"
//     })
// }

// const grandparent = document.getElementById("grandparent")
// grandparent.addEventListener('click',(e) => {
//     console.log(e.target);
//     // console.log("Grand parent is clicked")
// })

// const parent = document.getElementById("parent")
// parent.addEventListener('click',(e) => {
//     // console.log(e);

//     // console.log("parent is clicked")
// })

// const child = document.getElementById("child")
// child.addEventListener('click',(e) => {
//     // console.log(e);
//     // e.stopPropagation();
//     // console.log("child is clicked")
// })
 

const parent = document.getElementById("parent")
parent.addEventListener('click',(e) => {
    console.log(e.target);
    e.target.textContent = "I am clicked";
})