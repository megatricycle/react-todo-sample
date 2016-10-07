import React, { Component } from 'react';

import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

class TodoList extends Component {
    render() {
        const todoList = this.props.todoList;
        const unfinishedTasksCount = todoList.filter((todo) => !todo.done)
            .length;
        
        return (
            <div className="TodoList">
                <span>Unfinished tasks: {unfinishedTasksCount}</span>
                <ul>
                    {todoList.map((todo) => (
                        <li key={todo.id}>
                            <TodoItem
                                toggle={() => this.props.toggleTodo(todo.id)}
                                delete={() => this.props.deleteTodo(todo.id)}
                                todo={todo}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
