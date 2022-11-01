//En este archivo se tendra informacion del cliente
//Este objeto sirve para especificarle al servidor que metodo usaremos para disparar eventos
//Es la forma en la que se comunica el cliente y el servidor

/* The above code is creating a socket connection to the server and then sending the data to the
server. */
const socket = io();

export const loadnotes = () =>{
    socket.on('loadnotes', (data) => {
        console.log(data);
    })
}

//Aqui obtenemos la informacion que se senvia en el formulario
export const saveNote = (title, description) =>{
    socket.emit("newnote", {
        title,
        description
    });
};

