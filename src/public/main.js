/* A function that is being called. */
import {loadnotes} from "./sockets.js";
import {saveNote} from "./sockets.js";
loadnotes();

//Accedemos al id del formulario
const noteForm = document.querySelector("#noteForm")

//Accedemos al evento submit
noteForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    saveNote(
        noteForm['title'].value,
        noteForm['description'].value,
    );
});