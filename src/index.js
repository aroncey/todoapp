import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDom.render(
  <div className="center">
    <div className="appTitle">
      <header>
        <h1 >To Do</h1>
      </header>
    </div>
    <TodoList/>
  </div>
  , destination);
