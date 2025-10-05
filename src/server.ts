import * as http from 'http';

import {getFilteredEpisodes, getListEpisodes} from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const server = http.createServer( async (req:http.IncomingMessage, res:http.ServerResponse) => {

    //queryString
    const [baseUrl, queryString] = req.url?.split('?') ?? ["", ""];
    
    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res);
    }

    if(req.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilteredEpisodes(req, res);
    }
});

const port = process.env.PORT ? process.env.PORT : 3331

server.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado na porta: " + port)
})