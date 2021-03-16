const fetch = require('node-fetch');
const fs = require('fs').promises;

function urlFetch(url) {
  return fetch(url).then(result => result.json())
}


let homeworld;
let films;
let string;
let luke;

const lukeSkywalker = urlFetch('https://swapi.dev/api/people/1')

lukeSkywalker
  .then(person => urlFetch(person.homeworld))
  .then(result => homeworld = result.name);

lukeSkywalker
  .then(person => {
    luke = person.name;
    let filmsx = person.films;
    let filmUrls = []
    for (let film of filmsx) {
      filmUrls.push(urlFetch(film))
    }
    return filmUrls;
  })
  .then(filmsb => {
    return Promise.all(filmsb)
  })
  .then(names => {
    films = names.map(e => e.title);
  })
  .then(() => {
    string = `My name is ${luke} and I am from ${homeworld}. I starred in the following films: ${films.join(', ')}.`
    fs.writeFile('test.txt', string, 'utf-8')
  })
