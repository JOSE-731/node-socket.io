//En este archivo se tendra informacion del cliente
//Este objeto sirve para especificarle al servidor que metodo usaremos para disparar eventos
//Es la forma en la que se comunica el cliente y el servidor

/* The above code is creating a socket connection to the server and then sending the data to the
server. */
const socket = io();

export const loadNotes = (callback) =>{
    socket.on('server:loadnotes', callback);
};

//Aqui obtenemos la informacion que se senvia en el formulario
export const saveNote = (title, description) =>{
    socket.emit("client:newnote", {
        title,
        description
    });
};

//Escuchar el evento de cuando se crea una nueva nota
export const onNewNote = (callback) =>{
    socket.on('server:newnote', callback)
}

//Creando emitiendo evento para eliminar una nota
export const deleteNote = id =>{
    socket.emit('client:deletenote', id)
}

