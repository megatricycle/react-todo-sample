import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    constructor() {
        super();
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const inputField = e.target['todo-field']; 
        
        this.props.addTodo(inputField.value);
        
        inputField.value = '';
    }
    
    render() {
        return (
            <div className="TodoForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo-field" placeholder="Add Todo" autoComplete="off"/>
                    <input type="submit" value="Submit"/>
                </form>  
            </div>
        );
    }
}

export default TodoForm;
