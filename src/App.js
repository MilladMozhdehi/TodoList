import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import todoStore from "./stores/TodoStore";
import TodoEntry from "./components/TodoEntry";

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
      </div>
    );
  }
}

export default App;
