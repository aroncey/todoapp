import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import "./index.css";
import TodoList from "./TodoList";

var destination = document.querySelector("#container");

ReactDom.render(
  <div className="">
    <div className="appTitle">
      <header>
        <h1 >To Do</h1>
      </header>
    </div>
    <TodoList/>
  </div>
  , destination);
