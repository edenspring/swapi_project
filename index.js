const fetch = require('node-fetch')

console.log(fetch)

//This is a promise
const makingRequestToGithub = fetch("https://api.github.com/users/edenspring")

makingRequestToGithub
  .then(responseObject => {
    console.log(responseObject)
    return responseObject.json()
  })
  .then(data =>{
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
