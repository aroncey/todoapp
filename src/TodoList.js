import React, { Component } from "react";
import TodoItems from "./TodoItems";
import {Tooltip, OverlayTrigger} from 'react-bootstrap';
import "./TodoList.css";

class TodoList extends Component {
  constructor(props,context){
    super(props,context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateItemVisually = this.updateItemVisually.bind(this);
    this.manageEditForm = this.manageEditForm.bind(this);
}


  addItem(e){
    let todayDate = new Date(Date.now()).toLocaleString();
    let itemArray = this.state.items;

    if(this._inputElement.value !== ""){
      itemArray.push({
        text: this._inputElement.value,
        key: Date.now(),
        date_created: todayDate,
        date_modified: ""
      });

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    };
    console.log(itemArray);
    console.log(todayDate);

    e.preventDefault();
  };

  updateItem(key){
    console.log("updateTask function launched");

    //1.pick location of edit form:
    //2. html for form
    //3. modification of element in itemArray
    //4. setState with new variable containing modified array
        var filteredItems, i, j;
        var items = this.state.items;

        //----- Edit Pan Logic -----
        var valueOfTask = "Please enter new Value of Task";
        var newInput = "";
        for(j=0;j<items.length;j++){
          if(key === items[j].key){
             valueOfTask = items[j].text;
          };
        };

        //----- Prompt -----
        var  valueInputPrompt = () => {
                var value = prompt('Please Edit the task Name',valueOfTask);
                if (value != null && value != "") {
                  newInput = value;
                };
            };
        valueInputPrompt()

        //----- Editing items object & Setting new State -----
        for(i=0;i<items.length;i++){
          if(key === items[i].key && newInput !== ""){
            items[i].text = newInput;
          };
        };
        filteredItems = items;

        this.setState({
          items: filteredItems
        });
  };
  manageEditForm(key){
  }
  updateItemVisually(key){
    var items = this.state.items;
    var itemTxt, j;
    for(j=0;j<items.length;j++){
      if(key === items[j].key){
        itemTxt = items[j].text
        var selector = "li[value="+itemTxt+"] > .itemText";
        var locationItemText = document.querySelector(selector);
        var x = "<form id='newInputForm' onSubmit="+this.manageEditForm(key)+"><input placeholder='enter task'></input><button type='submit'>add</button></form>";
        locationItemText.outerHTML = x;
      };
    };
  };

  deleteItem(key){
    var filteredItems = this.state.items.filter(function(item){
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    });
  };

  render(){
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
          <TodoItems  entries={this.state.items}
                      delete={this.deleteItem}
                      update={this.updateItem} />
      </div>
    );
  };
};

export default TodoList;
