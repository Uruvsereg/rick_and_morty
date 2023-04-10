const axios = require('axios');

const getCharById = (res, id) => {
    axios(`http://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const char = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res.writeHead(200, {"Content-type" : "application/json"})
        .end(JSON.stringify(char));
    })
    .catch(err => 
        res.writeHead(500, {"Content-type" : "text/plane"})
            .end(`El personaje ${id} no existe`)
    )
};

module.exports = getCharById;