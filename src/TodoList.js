import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends Component {
  constructor(props,context){
    super(props,context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    //this.handleClick =this.handleClick.bind(this);
}


  addItem(e){
    var todayDate = new Date(Date.now()).toLocaleString();
    var itemArray = this.state.items;

    if(this._inputElement.value !== ""){
      itemArray.push({
        text: this._inputElement.value,
        key: Date.now(),
        Date: todayDate
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
    //1.pick location of edit form:
    //2. html for form
    //3. modification of element in itemArray
    //4. setState with new variable containing modified array
      // var itemArray = this.state.items;
      // var valueOfTask = "Please Edit Value of Task";
      // var updateditem, newInput;
      //
      // //---- second attemp ---
      // var  valueInputPrompt = () => {
      //         var value = prompt('Please Edit the task',valueOfTask);
      //         if (value != null && value != "") {
      //           newInput = value;
      //         };
      //       }
      // for(var i=0;itemArray.length>i ;i++){
      //   itemArray;
      //   var tempObj = {};
      //   if(itemArray[i].key === key){
      //     itemArray[i]
      //     tempObj = itemArray[i]
      //   }
      // }

    // function valueInputPrompt() {
    //         var value = prompt('Please Edit the task',valueOfTask);
    //         if (value != null && value != "") {
    //           newInput = value;
    //         }
    //         console.log(newInput);
    //     }

    //check if the new name is not empty
      // if(newInput !== ""){
      // };

      //find the obj in itemArray
      //replace text value of that obj with newinput
      //exit function

        // ---- first attempt ----
        // ItemsArrayState.forEach(function(item){
        //   if(item.key === key){
        //     console.log(this.state.items)
        //     ItemsArrayState[item].text = newInput;
        //   };
        // });
/*
    this.state.items.forEach(function(item){
      if(key === item.key){
        debugger
        var newInput = "";
        var  valueInputPrompt = () => {
                var value = prompt('Please Edit the task',valueOfTask);
                if (value != null && value != "") {
                  newInput = value;
                }
                console.log(newInput);
            }
        valueInputPrompt()
      }
    })

        console.log(ItemsArrayState)
        console.log(this.state)
*/

      // this.setState({
      //   items: itemArray
      // });
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
          <TodoItems entries={this.state.items}
                    delete={this.deleteItem}
                    update={this.updateItem} />
      </div>
    );
  }
}

export default TodoList;
