const noteTextarea = document.querySelector('#noteTextarea');
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

        editBtn.addEventListener('click', function (e) {
            // var note = e.parentNode
            console.log(e.parentNode)
        }, false)

        deleteBtn.addEventListener('click', function (e) {
            var note = e.parentNode
            notesList.removeChild(note)
        }, false)

        btnGroup.appendChild(editBtn)
        btnGroup.appendChild(deleteBtn)

        card.setAttribute('class', 'card mb-3 p-3')
        card.setAttribute('id', newNote)
        card.appendChild(document.createTextNode(newNote))
        card.appendChild(btnGroup)

        notesList.appendChild(card)
    }

    // Clear the textare.
    noteTextarea.value = '';
}

// function editNoteBtnClicked(e) {
//     var note = e.parentNode.parentNode
//     console.log(note)
// }

// function deleteNoteBtnClicked(e) {
//     var note = e.parentNode.parentNode
//     notesList.removeChild(note)
// }