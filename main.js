// alert("Hello")

// creating array of object
const todos = [
    {'text': 'Walk the dog'},
    {'text': 'Buy some milk'},
    {'text': 'Call the doctor'}
]


// Update todos list
function updateTodos () {
    todos.forEach(i => console.log(i.text))

}
updateTodos()

const newTodo = "I'm new todo :)"


// Add new todo to the array
function addTodo (todo) {
    todos.unshift({'text': todo})
    // updateTodos()
}

console.log('=====================')

addTodo(newTodo)
updateTodos()

// Mark todo as done
function doneTodo (todo) {
    let err = true
    todos.forEach(i => {
        if (i.text === todo) {
            i.text += '***'
            err = false
        }
    })

    if (err) {
        console.log('Something in doneTodo is wrong!!!!!!!')
    }
    console.log('=== From doneTodo() ===')
    updateTodos()
}

doneTodo(newTodo)
