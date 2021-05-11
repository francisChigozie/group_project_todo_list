// alert("Hello")
const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')


// creating array of object
let todos = [
    {'text': 'Walk the dog', 'complete': false},
    {'text': 'Buy some milk', 'complete': true},
    {'text': 'Call the doctor', 'complete': false}
]
updateTodos()

// Update todos list
function updateTodos () {
    list.innerHTML = ''
    
    todos.forEach(i => {
        let item = document.createElement('li')
        
        i.complete ? item.classList.add('complete') : item.classList.add('item')
        
        item.innerText = i.text
        item.addEventListener('click', j => {
            
            // i.preventDefault()
            if (item.classList.contains('complete')) {
                i.complete = false
                updateTodos()

            } else {
                i.complete = true
            updateTodos()

            }
                      
        })
        
        // console.log(item)
        list.appendChild(item)
        
    })
}

// Create todo
form.addEventListener('submit', i => {
    i.preventDefault()
    todos.unshift({'text': input.value, 'complete': false})
    input.value = ''
    updateTodos()

})


function deleteTodo (todo) {
    for (let i=0; i<todos.length; i++) {
        if (todos[i].text === todo) {
            
            todos.splice(i, 1)
            break
        }
    }

    // console.log('===deleteTodo===')
    // updateTodos()
        
}

const itemToDelete = 'Buy some milk'
// deleteTodo(itemToDelete)
// updateTodos()
// deleteTodo(itemToDelete)
// updateTodos()

window.addEventListener('load', updateTodos())