const box= document.querySelector(".box");
const btn= document.querySelector("button");

btn.addEventListener("click", ()=>{
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);

    let c4 = Math.floor(Math.random()*255);
    let c5 = Math.floor(Math.random()*255);
    let c6 = Math.floor(Math.random()*255);
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    btn.style.color =`rgb(${c4}, ${c5},${c6})`;
    
})
