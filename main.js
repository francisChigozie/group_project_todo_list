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


// Update todos list
function updateTodos () {
    list.innerHTML = ''
    
    todos.forEach(i => {
        let item = document.createElement('li')
        i.complete ? item.classList.add('complete') : item.classList.add('item')
        
        item.innerText = i.text
        
        // console.log(item)
        list.appendChild(item)
        
    })
}
// updateTodos()

const newTodo = "I'm new todo :)"

form.addEventListener('submit', i => {
    i.preventDefault()
    todos.unshift({'text': input.value, 'complete': false})
    input.value = ''
    updateTodos()

})

// Add new todo to the array
function addTodo (todo) {

    


    todos.unshift({'text': todo, 'complete': false})
    // updateTodos()
}

console.log('===addTodo====')

// addTodo(newTodo)
// updateTodos()

// Mark todo as done

function doneItem (todo) {
    todos.forEach(i => {
        if (i.text === todo) {
            console.log(i.text + '..to be done here :))))')
        }
    })
    updateTodos
}

// const itemToDone = 'Call the doctor'
// doneItem(itemToDone)



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