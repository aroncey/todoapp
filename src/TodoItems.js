import React, { Component } from "react";
import FlipMove from "react-flip-move";
import deleteImg from "./assets/minusButton.png"
class TodoItems extends Component {
  constructor(props,context){
    super(props,context);

    this.createTasks = this.createTasks.bind(this);
  }



createTasks(item){
  return <li
    key={item.key}
    value={item.text}>
    <span className="itemText" onClick={() => this.update(item.key)}>{item.text}</span>
    {/* <input className="updateInput" value={this.state.term} onChange></input> */}
    <img onClick={()=> this.delete(item.key)} src={deleteImg} className="deleteImg"/>
  </li>
}


delete(key){
  this.props.delete(key);
}
update(key){
  this.props.update(key);
}


  render (){
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={500} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;
