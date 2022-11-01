/* A function that is being called. */
import {loadNotes, onNewNote, saveNote} from "./sockets.js";
import {renderNotas, appendNote} from "./uil.js";

onNewNote(appendNote);
loadNotes(renderNotas);

//Accedemos al id del formulario
const noteForm = document.querySelector("#noteForm");

//Accedemos al evento submit del boton
noteForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    saveNote(
        noteForm['title'].value,
        noteForm['description'].value,
    );
});