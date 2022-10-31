//Definimos los eventos de sockets
export default(io) =>{
    //Ejecutar conexion con el servidor
    io.on('connection', () =>{
        console.log("Hola");
    })
}