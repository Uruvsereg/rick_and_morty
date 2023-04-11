const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.get("/rickandmorty/character/:id", async (req, res) => {
    const { id }= req.params
    try {
        const { data } = await axios(`https:///rickandmortyapi.com/api/character/${id}`);

        const infoChar = {
            id: data.id,
            name: data.name,
            species: data.species,
            gender: data.gender,
            image: data.image
        }
        res.status(200).json(infoChar);
    }
    catch (error) {
        res.status(404).send(error.message);
    }
})

app.get("/rickandmorty/detail/:detailId", async (req, res) => {
    try {
        const { detailId }= req.params;
        const { data } = (await axios(`https:///rickandmortyapi.com/api/character/${detailId}`));
    
        const infoCharDet = {
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.origin.name,
            image: data.image
        }
        res.status(200).json(infoCharDet);
    }
    catch (error) {
        res.status(404).send(error.message)
    }
})

const fav = [];

app.get("/rickandmorty/fav", (req, res) => {
    res.status(200).send(fav);
})

app.post("/rickandmorty/fav", (req, res) => {
    fav.push(req.body);
    res.status(200).send("Datos guardados correctamente");
})

app.delete("/rickandmorty/fav/:id", (req, res) => {
    const { id } = req.params;
    const filtroFav = fav.filter(char => char.id !== parseInt(id));
    fav = filtroFav;
    res.status(200).send("Personaje eliminado correctamente");
})

module.exports = app;



// const http = require('http');
// const getCharById = require('../controllers/getCharacterById');
// const getCharDetail = require('../controllers/getCharDetails');

// http.createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     const { url } = req;
//     const id = url.split('/').at(-1);

//     if(url.includes("onsearch")){
//         getCharById(res, id)
//     }

//     if(url.includes("detail")){
//         getCharDetail(res, id)
//     }
// }).listen(3001, "localhost")


// const characters = require('../utils/data');

// http.createServer((req, res)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     const { url } = req;
//     if(url.includes("rickandmorty/character")){
//         const id = url.split('/').at(-1);
//         const char = characters.find(car => car.id === Number(id));
        
//         if(char){
//             res
//                 .writeHead(200, {"Content-type" : "application/json"})
//                 .end(JSON.stringify(char));
//         }
//         else{
//             res.writeHead(404,{"Content-type" : "application/json"})
//             .end(JSON.stringify({error: "el personaje no fue encontrado"}));
//         }
//     }
// }).listen(3001, "localhost")