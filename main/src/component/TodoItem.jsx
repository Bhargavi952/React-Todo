import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteIcon from "@material-ui/icons/Delete";
import './TodoItem.css'

const TodoItem = ({ title, status, id, handleToggle,handleDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{status}</h3>
      <button
        onClick={() => {
          handleToggle(id);
        }}
      >
        <CheckCircleIcon fontSize="small" />
      </button>
      <button   onClick={() => {
          handleDelete(id);
        }}>
        <DeleteIcon fontSize="small"  />
      </button>
    </div>
  );
};

export default TodoItem;
