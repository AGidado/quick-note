const noteTextarea = document.querySelector('#noteTextarea');
const borderColorSelector = document.querySelector('#borderColorSelector')
const saveNoteBtn = document.querySelector('#saveNoteBtn');
const notesList = document.querySelector('#notesList');

saveNoteBtn.addEventListener('click', saveNoteBtnClicked, false);

function saveNoteBtnClicked() {
    var newNote = noteTextarea.value;

    if (newNote) {
        var card = document.createElement('div')
        var btnGroup = document.createElement('div')
        var editBtn = document.createElement('button')
        var deleteBtn = document.createElement('button')

        btnGroup.setAttribute('class', 'btn-group btn-group mt-4')
        btnGroup.setAttribute('role', 'group')

        editBtn.setAttribute('class', 'border-0 px-2 mr-1 text-info')
        editBtn.appendChild(document.createTextNode('Edit'))
        deleteBtn.setAttribute('class', 'border-0 px-2 mr-1 text-danger')
        deleteBtn.appendChild(document.createTextNode('Delete'))

        borderColorSelecor.setAttribute('class', 'form-control')

        editBtn.addEventListener('click', function (e) {
            noteTextarea.value = newNote
            notesList.removeChild(document.getElementById(newNote))
        }, false)

        deleteBtn.addEventListener('click', function (e) {
            notesList.removeChild(document.getElementById(newNote))
        }, false)

        btnGroup.appendChild(editBtn)
        btnGroup.appendChild(deleteBtn)

        card.setAttribute('class', 'card mb-3 p-3')
        card.setAttribute('id', newNote)
        // card.style.borderColor = borderColorSelector.value
        card.appendChild(document.createTextNode(newNote))
        card.appendChild(btnGroup)

        notesList.appendChild(card)
    }
    // console.log(borderColorSelector.value)
    noteTextarea.value = '';
}
