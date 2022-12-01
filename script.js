let search = document.getElementById('search')
let searchinput = document.getElementById('searchinput')

let herobtn = document.getElementById('herobtn')
let superapi = 'https://superheroapi.com/api.php/3361563447441329'


let superheroapi = (id) => {
    fetch(`${superapi}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            let name = `<h2>${json.name}</h2>`
            let powerstats = `<h3> powerstats</h3>`
            let combat = `<p>Combat : ${json.powerstats.combat}</p>`
            let durability = `<p>Durablity :${json.powerstats.durability}</p>`
            let intelligence = `<p>Intelligence :${json.powerstats.intelligence}</p>`
            let power = `<p>Power :${json.powerstats.power}</p>`
            let speed = `<p> Speed :${json.powerstats.speed}</p>`
            let strength = `<p> Strength :${json.powerstats.strength}</p>`
            document.getElementById('image').innerHTML =
                `${name}<img src="${json.image.url}" height=300 width=300/>${powerstats} ${combat} ${durability}
        ${intelligence} ${power} ${speed} ${strength}`

        }
        )
}

let searchhero = (name) => {
    fetch(`${superapi}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            let hero = json.results[0]
            console.log(hero)
            let name = `<h2>${hero.name}</h2>`
            let powerstats = `<h3> powerstats</h3>`
            let combat = `<p>Combat : ${hero.powerstats.combat}</p>`
            let durability = `<p>Durablity :${hero.powerstats.durability}</p>`
            let intelligence = `<p>Intelligence :${hero.powerstats.intelligence}</p>`
            let power = `<p>Power :${hero.powerstats.power}</p>`
            let speed = `<p> Speed :${hero.powerstats.speed}</p>`
            let strength = `<p> Strength :${hero.powerstats.strength}</p>`

            document.getElementById('image').innerHTML =
                `${name}<img src="${hero.image.url}" height=300 width=300/>${powerstats} ${combat} ${durability}
        ${intelligence} ${power} ${speed} ${strength}`
        }
        )
}



let randomnum = () => {
    let noofheros = 731
    return Math.floor(Math.random() * noofheros) + 1
}

herobtn.onclick = () => superheroapi(randomnum())
search.onclick = () => searchhero(searchinput.value)
