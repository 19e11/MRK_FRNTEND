let grp = [
    {
        user: 'Nigga1',
        age: 22,
        city: 'Bhopal',
        price: '10k'
    },
    {
        user: 'Nigga2',
        age: 20,
        city: 'Indore',
        price: '8k'
    },
    {
        user: 'Nigga3',
        age: 19,
        city: 'Panna',
        price: '15k'
    },
    {
        user: 'Nigga4',
        age: 25,
        city: 'Jabalpur',
        price: '9k'
    }]

let jodd = ''
    grp.forEach((e)=>{
        jodd += `<div class="card">
        <h1>${e.user}</h1>
        <h2>${e.age},${e.city}</h2>
        <h4>Salary:${e.price}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, odio.
        </p>
        </div>`
    })

    document.querySelector('body').innerHTML = jodd 