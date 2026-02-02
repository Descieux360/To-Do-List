class TodoList {
    constructor() {
        this.todos = this.loadFromStorage() || [];
    }

    addTodo(text) {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        this.todos.push(todo);
        this.saveToStorage();
        return todo;
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveToStorage();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
        }
    }

    getTodos() {
        return this.todos;
    }

    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromStorage() {
        const data = localStorage.getItem('todos');
        return data ? JSON.parse(data) : null;
    }
}

// Usage
const todoList = new TodoList();
todoList.addTodo('Learn JavaScript');
todoList.addTodo('Build a project');
console.log(todoList.getTodos());