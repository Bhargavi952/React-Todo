import React, { useState } from "react";
import { v4 as uuid } from "uuid";


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
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="Write something"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
