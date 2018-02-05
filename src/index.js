import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDom.render(
  <div className="center">
    <header>
      <h1 className="appTitle">To Do</h1>
    </header>
    <TodoList/>
  </div>
  , destination);
