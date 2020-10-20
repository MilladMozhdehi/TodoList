import { observable, action, computed } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable filter = "all";
  all = "all";
  active = "active";
  com = "completed";
  lastID = 1;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
  }

  @action
  deleteTodo = (id) => {
    const index = this.todos.findIndex((item) => item.id === id);
    this.todos.splice(index, 1);
  };

  @action
  clearTodo = () => {
    this.todos = this.todos.filter((todo) => !todo.completed);
  };

  @action
  filterUpdate = () => {
    this.filter = this.all;
  };

  @action
  filterActiveUpdate = () => {
    this.filter = this.active;
  };

  @action
  filterComUpdate = () => {
    this.filter = this.com;
  };

  @computed get todosFilter() {
    if (this.filter === "all") {
      return this.todos;
    } else if (this.filter === "active") {
      return this.todos.filter((todo) => !todo.completed);
    } else if (this.filter === "completed") {
      return this.todos.filter((todo) => todo.completed);
    }
    return this.todos;
  }
}

const todoStore = new TodoStore();
export default todoStore;
