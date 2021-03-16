const fetch = require('node-fetch');

function urlFetch(url){
  return fetch(url).then(result => result.json())
}


//console.log(urlFetch(`https://swapi.dev/api/people/1`))

const lukeSkywalker = urlFetch('https://swapi.dev/api/people/1')

//console.log(urlFetch('https://swapi.dev/api/people/1'))

console.log(lukeSkywalker)

let homeworld = lukeSkywalker
  .then(person => urlFetch(person.homeworld))
  .then(result => console.log(result));

const lukeFilms = lukeSkywalker
  .then(person => {
    let films = person.films;
    let filmUrls = []
    for (let film of films){
      filmUrls.push(urlFetch(film))
    }
    return filmUrls;
    })
    .then(films => {
      return Promise.all(films)
    })
    .then(names => {
      names.forEach(e => {
        console.log(e.title)
      })
    })
