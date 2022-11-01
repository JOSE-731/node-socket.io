/* A function that is being called. */
import {loadNotes} from "./sockets.js";
import {saveNote} from "./sockets.js";
import {renderNotas} from "./uil.js";

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