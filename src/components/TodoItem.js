import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={this.onToggle}
            className="toggle"
            type="checkbox"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <div className="closebut">
            <img
              src="./image/close.png"
              className="closeicon"
              onClick={(event) => todoStore.deleteTodo(this.props.todo.id)}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default TodoItem;
