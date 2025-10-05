import * as http from 'http';

import {getFilteredEpisodes, getListEpisodes} from './controllers/podcasts-controller';

const server = http.createServer( async (req:http.IncomingMessage, res:http.ServerResponse) => {

    //queryString
    const [baseUrl, queryString] = req.url?.split('?') ?? ["", ""];
    
    if(req.method === "GET" && baseUrl === '/api/list'){
        await getListEpisodes(req, res);
    }

    if(req.method === 'GET' && baseUrl === '/api/episode'){
        await getFilteredEpisodes(req, res);
    }
});

const port = process.env.PORT ? process.env.PORT : 3331

server.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado na porta: " + port)
})