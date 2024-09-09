const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");   // Use to show written notes after refreshing or again opening the app
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);   // use to store the written notes in the local storage 
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");                  // the delete button
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");         // to make the paragraph editable
    img.src = "images/delete.png";                            // image of delete icon
    notesContainer.appendChild(inputBox).appendChild(img);    // means add both of them to notesContainer
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){                            // if the user click on the img button or delete icon,
        e.target.parentElement.remove();                        // the current written notes will be removed and the update Storage 
        updateStorage();                                           // will update the local storage that the written notes is removed
    }
    else if(e.target.tagName === "P"){                         // here the written notes will be added to notes section and update by local storage
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{                    // use to get to the next line when press ENTER
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
