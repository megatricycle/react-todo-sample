import React, { Component } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

import './App.css';

class App extends Component {
    constructor() {
        super();
        
        this.state = {
            todoList: [{
                id: 0,
                task: 'Task #1',
                done: false
            }],
            currentId: 1
        };
        
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    addTodo(task) {
        const todoObj = {
            id: this.state.currentId,
            task: task,
            done: false
        };
        
        this.setState({
            todoList: [
                ...this.state.todoList,
                todoObj
            ],
            currentId: this.state.currentId + 1
        });
    }
    toggleTodo(todoId) {
        const newTodoList = this.state.todoList.map((todo) => {
            if(todo.id !== todoId) return todo;
            
            return {
                id: todo.id,
                task: todo.task,
                done: !todo.done
            };
        });
        
        this.setState({
            todoList: newTodoList
        });
    }
    deleteTodo(todoId) {
        const newTodoList = this.state.todoList.filter((todo) => todo.id !== todoId);
        
        this.setState({
            todoList: newTodoList
        });
    }
    render() {
        return (
            <div className="App">
                <TodoForm
                    addTodo={this.addTodo}
                />
            
                <TodoList
                    todoList={this.state.todoList}
                    toggleTodo={this.toggleTodo}
                    deleteTodo={this.deleteTodo}
                />  
            </div>
        );
    }
}

export default App;
