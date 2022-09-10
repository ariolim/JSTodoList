import AddTodo from "./components/add-todo.js";

export default class View {
    constructor() {
        this.model = null;
        this.description = document.getElementById('description');
        this.title = document.getElementById('title');
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo();
        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
    }

    render() {
        const todos = this.model.getTodos();
        todos.forEach(todo=>this.createRow(todo))
    }

    setModel(model) {
        this.model = model;
    }

    addTodo(title, description) {
        const todo = this.model.addTodo(title, description);
        this.createRow(todo);
    }

    removeTodo(id) {
        this.model.removeTodo(id);
        document.getElementById(id).remove();
    }

    checkBoxToggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    createRow(todo) {
        const row = this.table.insertRow();
        row.setAttribute('id', todo.id);

        row.innerHTML = `<tr>
              <td>${todo.title}</td>
              <td>${todo.description}</td>
              <td class="text-center">
                
              </td>
              <td class="text-right">
                <button class="btn btn-primary mb-1">
                  <i class="fa fa-pencil"></i>
                </button>
              </td>
            </tr>
            `;
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = todo.completed;
        checkBox.onclick = () => this.checkBoxToggleCompleted(todo.id);

        row.children[2].appendChild(checkBox);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeTodo(todo.id);

        row.children[3].appendChild(removeBtn);

        this.title.value = '';
        this.description.value = '';
    }
}