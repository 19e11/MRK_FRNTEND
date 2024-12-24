let btn = document.querySelector("button");
let progress = document.querySelector(".progress");
let h4 = document.querySelector('h4');
let growth = 0;
let speed = Math.floor(Math.random()*100);


btn.addEventListener("click", function() {
 let growthInterval = setInterval(function() {
        growth++;
        h4.innerHTML = growth + '%'
        progress.style.width =  growth+ '%';
    },speed)
    setTimeout(function() {
        clearInterval(growthInterval)
        btn.style.opacity = 0.5;
        btn.innerHTML = 'Downloaded';
        btn.style.pointerEvents = "none";
    },speed*100)
});
