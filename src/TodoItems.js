import React, { Component } from "react";
import FlipMove from "react-flip-move";
import deleteImg from "./assets/black-cross.png"
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

class TodoItems extends Component {
  constructor(props,context){
    super(props,context);

    this.createTasks = this.createTasks.bind(this);
  }


createTasks(item){
  const clickToEditTooltip = (
    <Tooltip id="tooltip">Click to Edit</Tooltip>
);
  const deleteItemTooltip = (
    <Tooltip id="tooltip">Delete Item</Tooltip>
);

  return <li
    key={item.key}
    value={item.text}>
    <OverlayTrigger placement="bottom" delay={250} overlay={clickToEditTooltip}>
      <span className="itemText" onClick={() => this.update(item.key)}>{item.text}</span>
    </OverlayTrigger>
      <br/>
      <span className="itemDate"><i>Date: </i>{item.date_created}</span>
    <OverlayTrigger placement="right" delay={250} overlay={deleteItemTooltip}>
      <img onClick={()=> this.delete(item.key)} src={deleteImg} className="deleteImg"/>
    </OverlayTrigger>
  </li>
};


delete(key){
  this.props.delete(key);
};
update(key){
  this.props.update(key);
};



  render (){
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={500} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    )
  };
};

export default TodoItems;
