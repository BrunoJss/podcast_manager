import * as http from 'http';
import { app } from './app';



const server = http.createServer( app );

const port = process.env.PORT ? process.env.PORT : 3331

server.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado na porta: " + port)
})