// this function gets the task from input
function get_todos() {
    // this creates an array of tasks that are inputed
    var todos = new Array;
    // this pulls the task that was saved in the web browser memory
    var todos_str = localStorage.getItem('todo');
    // if the input is not null then JSON.parse will communicate with
    // the web browser to make the task a JS object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// this function adds the inputed task to the get_todos function array
function add() {
    // this takes the inputed task to the get_todos function array
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // this adds a new task at the end of the array
    todos.push(task);
    // this converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// this function keeps the tasks permanently displayed on the screen
function show() {
    // this sets the task that was retrieved as a variable
    var todos = get_todos();

    // this sets up each task as an unordered list
    var html = '<ul>';
    // this displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        // this also displays the task as a list and creates the button with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id=""' + i + '">x</button></li>';
    };
    html += '</ul>';
    // This displays the task as a list
    document.getElementById('todos').innerHTML = html;
}

// this displays the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// this will keep the inputs displayed permanently on the screen
show();