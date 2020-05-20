import React, { Component } from 'react';
import './App.css';

const TodoItem = (props) => (   //Since only single props, therefore could have written {text}
  <li>{props.text}</li>         //and thus here we could have written {text}
);                

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }                       //newTodo: '' coz every time we save the task, and we have to enter a new task here, then we dont want/have to erase the previous task from the text box and wrte the new task, it will automatically make it empty. 
  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />
    ));
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="Enter new task here!"
            value={newTodo}
            onChange={(e) => this.setState({[e.target.name]: e.target.value })}
                                            //[e.target.name] can also be written as newTodo when only single input, can also be used for multiple inputs also but then it would be very tedious and we would have to write a different function for each input
          />                                

          <br></br>
          <br></br>
          <button
            type="submit"
            className="save-button"
          >
            SAVE
          </button>
        </form>
        <div className="todo-content">
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;