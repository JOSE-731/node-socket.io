/* A function that is being exported. */
//Importamos el modelo
import Note from './models/Note'

//Definimos los eventos de sockets
export default (io) => {
    //Ejecutar conexion con el servidor
    io.on('connection', (socket) => {

        //Hacemos una consulta que se ejecuta cada que visitan la pagina
        const emitNotes = async () => {
            const notes = await Note.find()

            //Este metodo sirve para enviar data al cliente
            io.emit('loadnotes', notes);
        }
        emitNotes();

        //Guardamos la data que se envia desde el cliente
        socket.on('newnote', async data => {
           const newNote = new Note(data);
           await newNote.save();
        });

    })
}