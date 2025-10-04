import * as http from 'http';

import {getFilteredEpisodes, getListEpisodes} from './controllers/podcasts-controller';

const server = http.createServer( async (req:http.IncomingMessage, res:http.ServerResponse) => {

    if(req.method === "GET" && req.url === '/api/list'){
        await getListEpisodes(req, res);
    }

    if(req.method === 'GET' && req.url === '/api/episode'){
        await getFilteredEpisodes(req, res);
    }
});

const port = process.env.PORT ? process.env.PORT : 3331

server.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado na porta: " + port)
})