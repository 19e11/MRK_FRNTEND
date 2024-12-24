let body = document.querySelector("body");
let img = document.querySelector(".image");
let moveX = 0;
let moveY = 0;
body.addEventListener("keydown", (data) =>{
    if (data.code === 'ArrowRight' && moveX<93){
        moveX++;
        console.log(moveX);
        img.style.left = moveX + '%';
    }
    else if (data.code === 'ArrowLeft' && moveX>0){
        moveX--;
        console.log(moveX);
        img.style.left = moveX + '%';
    }
    else if (data.code === 'ArrowDown' && moveY<85){
        moveY++;
        console.log(moveY);
        img.style.top = moveY + '%';
    }
    else if (data.code === 'ArrowUp' && moveY>0){
        moveY--;
        console.log(moveY);
        img.style.top = moveY + '%';
    }
    console.log(data.code);
    
})