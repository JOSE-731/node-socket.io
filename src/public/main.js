//Este objeto sirve para especificarle al servidor que metodo usaremos para disparar eventos
//Es la forma en la que se comunica el cliente y el servidor
const socket = io()
socket.on('loadnotes', (data) => {
    console.log(data);
})