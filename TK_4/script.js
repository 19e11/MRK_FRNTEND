let arr = ["Talha Anjum", "The Weeknd", "Juice WRLD", "XXXTENTATION", "Eminem"];
const btn = document.querySelector('button');
const ans = document.querySelector('h2');
let body = document.querySelector('body');

btn.addEventListener('click',()=>{
    let winner = Math.floor(Math.random() *arr.length);
    ans.innerHTML = arr[winner];
    if(ans.innerHTML ==="Talha Anjum"){
        body.style.backgroundImage = "url('https://i.pinimg.com/736x/7f/ba/47/7fba47303ac192991e5e90fb4c323c74.jpg')"
        body.style.backgroundImage
    }
    else if(ans.innerHTML ==="The Weeked"){
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1663994768434-3efcc72f4290?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }
    else if(ans.innerHTML ==="Juice WRLD"){
        body.style.backgroundImage = "url('https://wallpaperaccess.com/full/816249.jpg')"
    }
    else if(ans.innerHTML ==="XXXTENTACION"){
        body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp6183374.jpg')"
    }
    else if(ans.innerHTML ==="Eminem"){
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1562872458-d92517741af5?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }
    else{
        body.style.backgroundColor = 'black'
    }
})
