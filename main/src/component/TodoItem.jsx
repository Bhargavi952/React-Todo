import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';
import SentimentVerySatisfiedSharpIcon from '@material-ui/icons/SentimentVerySatisfiedSharp';
import "./TodoItem.css";

const TodoItem = ({ title, status, id, handleToggle, handleDelete }) => {
  return (
    <div className="itemCont">
      <h3>Task : {title}</h3>
      <Button
        onClick={() => {
          handleToggle(id);
        }}
      >
        <Checkbox style={{ color: "black"  }} />
      </Button>
      <Button
        onClick={() => {
          handleDelete(id);
        }}
      >
        <DeleteIcon style={{fontSize:"27px"}}  fontSize="small" />
      </Button>
      <h3 className='status'>{status ? "Task is completed":null}</h3>
    </div>
  );
};

export default TodoItem;
