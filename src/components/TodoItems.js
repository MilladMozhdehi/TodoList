import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import { inject, observer } from "mobx-react";

@observer
class TodoItems extends Component {
  remainingTodo = () => {
    return todoStore.todos.filter((todo) => !todo.completed).length;
  };

  onClear = () => {
    todoStore.clearTodo();
  };

  render() {
    return (
      <div>
        <footer className="main">
          <ul className="todo-list">
            {todoStore.todosFilter.map((todo, index) => {
              return <TodoItem key={todo.id} todo={todo} />;
            })}
          </ul>
        </footer>
        <div className="myitem">
          <div className="remain">{this.remainingTodo()} items left</div>
          <div className="update">
            <input
              type="button"
              value="All"
              onClick={() => todoStore.filterUpdate()}
              className="but"
            />
            <input
              type="button"
              value="Active"
              onClick={() => todoStore.filterActiveUpdate()}
              className="but"
            />
            <input
              type="button"
              value="Completed"
              onClick={() => todoStore.filterComUpdate()}
              className="but"
            />
          </div>
          <div className="cls">
            <input type="button" value="Clear Completed" onClick={todoStore.clearTodo} style={{cursor:"pointer"}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItems;
