const http = require('http');
const characters = require('../utils/data');

http.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin")
    if(req.url.includes("rickandmorty/character")){
        let id =req.url.split('/').at(-1);
        let char = characters.find(car => car.id === Number(id))

        res
            .writeHead(200, {"Content-type" : "application/json"})
            .end(JSON.stringify(char))
    }
}).listen(3001, "localhost")