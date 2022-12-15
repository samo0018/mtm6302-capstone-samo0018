const $apod = document.getElementById('apod')
const $date = document.getElementById('date')
const $cal = document.getElementById('calendar')
const $submit = document.getElementById('submit')
const $body = document.querySelector('body')
const $fav = document.getElementById('fav')

const data = {
    favourites: []
}

const today = new Date()

const todayArray = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
]

const todayDate = todayArray.join('-')

$cal.max = todayDate

$submit.addEventListener('click', async function(){


    const pickedDate = $cal.value
 
    // fetchAPOD()
    const url = 'https://api.nasa.gov/planetary/apod?api_key=kgHe4M0ZfQJmBjLhBAu9M9H1GM1eZqrhsEXz2CH2&date=' + pickedDate

    const response = await fetch(url)
    const json = await response.json()

    data.apod = json

    $apod.innerHTML = `
    <figure>
        <button class="fav">Add to Favs</button>
        <br> 
        <img src="${json.url}" alt="">
        <h1>${json.title}</h1>
        <h2>${json.date}</h2>
        <figcaption>${json.explanation}</figcaption>
    </figure>
    `
})

$body.addEventListener('click', function(e){
    console.log(e.target)

    if (e.target.classList.contains('fav')) {
        console.log('fav')
        data.favourites.push(data.apod)
        saveFavourites()
        buildFavourites()
    }

})

function saveFavourites(){
    localStorage.setItem('favourites', JSON.stringify(data.favourites))
}

function buildFavourites(){
    const html = []
    for (let i=0; i<data.favourites.length; i++){
        html.push(`<img src="${data.favourites[i].url}" alt="">`)
    }
    $fav.innerHTML = html.join('')
}