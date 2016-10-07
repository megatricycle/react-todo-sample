import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const todo = this.props.todo;
        
        return (
            <div className="TodoItem">
                <input
                    type="checkbox"
                    checked={todo.done}
                    onClick={this.props.toggle}
                />
                <span>{todo.task}</span>
                <button
                    onClick={this.props.delete}
                >
                    X
                </button>
            </div>
        );
    }
}

export default TodoItem;
