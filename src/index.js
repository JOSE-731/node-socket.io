import app from './app';
//Importamos socket.io y creamos un alias cuyo nombre es WebsocketServer
import {Server as WebsocketServer} from 'socket.io';
import http from 'http';

import {connectDB} from './db';
connectDB();

//Creamos un servidor http el cual servirá para ejecutar Websocket
const server = http.createServer(app);
const httpServer = server.listen(3000);
//Creamos un servidor de Websocket, la conexion que vamos a tener con el cliente
const io = new WebsocketServer(httpServer);
console.log("Hola mundo")