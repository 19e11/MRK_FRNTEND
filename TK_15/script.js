let niggas= 
  [
    {
      "name": "Suyash Chaturvedi",
      "img": "https://images.unsplash.com/photo-1730979466254-91ca4a3123d8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "7m"
    },
    {
      "name": "Yo(Su/Her)",
      "img": "https://images.unsplash.com/photo-1734418265881-bf6efc0339e0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "12m"
    },
    {
      "name": "Suyash Pawar",
      "img": "https://images.unsplash.com/photo-1609372254316-029635bbabe4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "27m"
    },
    {
      "name": "Ronnie",
      "img": "https://images.unsplash.com/photo-1734249201319-e7227b1b4f54?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "45m"
    },
    {
      "name": "Bhaiya",
      "img": "https://images.unsplash.com/photo-1609750340486-b0063919c5bd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "1h"
    },
    {
      "name": "Winney The Goo",
      "img": "https://images.unsplash.com/photo-1734329403517-d463a131f7b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "3h"
    },
    {
      "name": "Hagantu Yantra",
      "img": "https://images.unsplash.com/photo-1681403907689-808a0d3ee9fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "6h"
    },
    {
      "name": "Pintu Dada",
      "img": "https://images.unsplash.com/photo-1732115482599-af8e7494cb5c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "8h"
    },
    {
      "name": "Babu Bhaiya",
      "img": "https://images.unsplash.com/photo-1732480509151-cb3d991ff9a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "14h"
    },
    {
      "name": "Sarthak Bhaiya",
      "img": "https://images.unsplash.com/photo-1734275689282-e059925e14ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "status": "21h"
    }
  
  ]

  let jodd = '';
  niggas.forEach((e,idx)=>{
    jodd += `<div class="otherstory">
                <img id="${idx}" src="${e.img}" alt="">
            </div>`; 
  })

  let full = document.querySelector('.full');
  let h2 = document.querySelector('h2');
  let time = document.querySelector('h3');
  let growth = document.querySelector('.growth');
  let storys =  document.querySelector(".storys");
  storys.innerHTML = jodd;
  

  storys.addEventListener("click",(data)=>{
    let grow = 0;
    let choti_gold = niggas[data.target.id]; 
    full.style.display = "block";
    full.style.backgroundImage = `url(${choti_gold.img})`;
    h2.innerHTML = choti_gold.name;
    time.innerHTML = choti_gold.status;

   let inter =  setInterval(function() {
      grow++;
      growth.style.width = grow+'%';
    },30)

    setTimeout(function() {
      full.style.display = "none";
      clearInterval(inter);
    },3000)
  })