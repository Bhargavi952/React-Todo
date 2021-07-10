import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const TodoInput = ({inputData}) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    const payload = {
        title:text,
        status: false,
        id: uuid(),

    };
    inputData(payload)
    setText("")
  };
  return (
    <div>
      <TextField
      size= "small"
      variant="outlined"
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="Write something"
      />
      <div><Button style={{width:"100px",borderRadius:"15px",marginTop:"10px",fontWeight:"bold",height:"25px"}} variant="outlined" onClick={handleAdd}>Add</Button></div>
    </div>
  );
};

export default TodoInput;
