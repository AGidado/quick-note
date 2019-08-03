// Add your javascript hereconst noteTextarea = document.querySelector('#noteTextarea');
const noteTextarea = document.querySelector('#noteTextarea')
const saveNoteBtn = document.querySelector('#saveNoteBtn')
const notesList = document.querySelector('#notesList')
const borderColorSelector = document.querySelector('#borderColorSelector')

saveNoteBtn.addEventListener('click', saveNoteBtnClicked, false)

function saveNoteBtnClicked() {
    var newNote = noteTextarea.value

    if (newNote && borderColorSelector.options.selectedIndex !== 0) {
        var borderColor = borderColorSelector.options[borderColorSelector.options.selectedIndex].value
        var card = document.createElement('div')
        var btnGroup = document.createElement('div')
        var editBtn = document.createElement('button')
        var deleteBtn = document.createElement('button')

        btnGroup.setAttribute('class', 'mt-4')

        editBtn.setAttribute('class', 'border-0 px-2 mr-1 text-info')
        editBtn.appendChild(document.createTextNode('Edit'))
        deleteBtn.setAttribute('class', 'border-0 px-2 mr-1 text-danger')
        deleteBtn.appendChild(document.createTextNode('Delete'))

        editBtn.addEventListener('click', function () {
            var noteBorderColor = String(this.parentNode.parentNode.className).split(' ')[0]
            borderColorSelector.selectedIndex = borderColorSelector.children.namedItem(noteBorderColor).index
            noteTextarea.value = newNote
            notesList.removeChild(document.getElementById(newNote))
        }, false)

        deleteBtn.addEventListener('click', function () {
            notesList.removeChild(document.getElementById(newNote))
        }, false)

        btnGroup.appendChild(editBtn)
        btnGroup.appendChild(deleteBtn)

        var noteStyle = borderColor + ' mb-3 p-3'

        card.setAttribute('class', noteStyle)
        card.setAttribute('id', newNote)
        card.appendChild(document.createTextNode(newNote))
        card.appendChild(btnGroup)

        notesList.appendChild(card)

        noteTextarea.value = ''
        borderColorSelector.options.selectedIndex = 0
    }
    else {
        window.alert('A note can neither be empty nor could it have no border color!')
    }
}
