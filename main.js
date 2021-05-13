function selectToDo(){
    let selectOption = document.getElementById("selToDo");
    let selectDisplay = document.getElementById("divDisplay");

        let selTodo = selectOption.Value;
        switch(selTodo){
            case 'email':
                return 'Write an Email';
            case 'dog':
                return 'Walk the Dog';
            case 'icream ':
                return 'Buy Ice cream';
            case 'pizza':
                return 'Order some Pizza';
            case 'shop':
                return 'Do small Shopping';
            case 'book':
                return 'Read a Book';
            case 'news':
                return 'Check the News';
            case 'friday':
                return 'Weekend Planing';
        }

        selectDisplay.innerHTML = selTodo;
        
};

function chooseToDo(){
    let txtName1 = document.getElementById("txtName1");
    let divDisplay = document.getElementById("divDisplay");
        
        let outPut = txtName1.Value;

        divDisplay.innerHTML = outPut;

}

// alert("Hello")
// creating array of object
/*
let todos = [
    {'text': 'Walk the dog'},
    {'text': 'Buy some milk'},
    {'text': 'Call the doctor'}
]


// Update todos list
function updateTodos () {
    console.log('The Array Is:')
    todos.forEach(i => console.log(i.text))
}
// updateTodos()

const newTodo = "I'm new todo :)"


// Add new todo to the array
function addTodo (todo) {
    todos.unshift({'text': todo})
    // updateTodos()
}

console.log('===addTodo====')

addTodo(newTodo)
updateTodos()

// Mark todo as done

function doneItem (todo) {
    todos.forEach(i => {
        if (i.text === todo) {
            console.log(i.text + '..to be done here :))))')
        }
    })
    updateTodos
}

const itemToDone = 'Call the doctor'
doneItem(itemToDone)



function deleteTodo (todo) {
    for (let i=0; i<todos.length; i++) {
        if (todos[i].text === todo) {
            
            todos.splice(i, 1)
            break
        }
    }

    console.log('===deleteTodo===')
    updateTodos()
        
}

const itemToDelete = 'Buy some milk'
// deleteTodo(itemToDelete)
updateTodos()
deleteTodo(itemToDelete)*/