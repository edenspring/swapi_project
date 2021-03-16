const fetch = require('node-fetch');

const firstFetch = fetch('https://swapi.dev/api/people/1')

console.log(firstFetch)

firstFetch
  .then(res => res.json())
  .then(person => console.log(person));
