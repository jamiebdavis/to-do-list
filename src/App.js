import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/todos";
import AddTodo from "./components/addForm";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "buy some milk"
      },
      {
        id: 2,
        content: "play games"
      },
      {
        id: 3,
        content: "go shopping"
      }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];

    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="center">To-do List</p>
        </header>
        <div className="container">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <br />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
