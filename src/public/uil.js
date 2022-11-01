import { deleteNote } from "./sockets.js";
//Accedemos al id de la lista
const noteList = document.querySelector("#notes");

//Plantilla de la ventana
const noteUI = note => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
      <h1>${note.title}</h1>
        <div>
            <button class="delete" data-id="${note._id}">Delete</button>
            <button>Update</button>
        </div>
      <p>${note.description}</p>
    </div>
    `
    const btnDelete = div.querySelector('.delete');
    btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id));
    return div;
}

//Mostramos la data en una lista
export const renderNotas = notes => {
    notes.forEach(note => {
        //Cuando cargue el render node que lo cargue sin nada
        noteList.innerHTML = ''
        //Renderizamos lo que creamos en la plantilla
        notes.forEach(note => noteList.append(noteUI(note)));
    });

}

//Agregamos a la vista para que se actualice cada que se agrega una nota nueva
export const appendNote = note =>{
    noteList.append(noteUI(note));
}