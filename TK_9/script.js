let body = document.querySelector("body");
let cursor = document.querySelector(".cursor");
let h1 = document.querySelector("h1");


body.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

h1.addEventListener("mouseenter", ()=>{
    cursor.style.scale = 4;
})

h1.addEventListener("mouseleave", ()=>{
    cursor.style.scale = 1;
})