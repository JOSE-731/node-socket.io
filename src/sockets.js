//Importamos el modelo
import Note from './models/Note'

//Definimos los eventos de sockets
export default(io) =>{
    //Ejecutar conexion con el servidor
    io.on('connection', () =>{

        //Hacemos una consulta que se ejecuta cada que visitan la pagina
        const emitNotes = async () =>{
            const notes = await Note.find()
            console.log(notes)

            //Este metodo sirve para enviar data al cliente
            io.emit('loadnotes', notes);
        }

        emitNotes();
    })
}