import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import TodoItems from "./TodoItems";

class TodoEntry extends Component {
  state = {
    value: "",
  };

  handleKeyDown = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    todoStore.addTodo(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>ToDo</h1>
          <input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value})}
            onKeyDown={(event) => this.handleKeyDown(event)}
            type="text"
            placeholder="What needs to be done?"
            className="new-todo"
          />
        </header>
        <TodoItems />
        
      </div>
    );
  }
}

export default TodoEntry;
