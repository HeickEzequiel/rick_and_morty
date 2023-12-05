const axios = require("axios")

const getCharById = (res, id) => {
axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
            location: data.location
        }
        return res
            .writeHead(200, {"content-type":"application/json"})
            .end(JSON.stringify(character))
    })
    .catch(error =>{
         return res
        .writeHead(500, {"content-type":"text/plain"})
        .end(error.message)
        
        })
}

module.exports = getCharById