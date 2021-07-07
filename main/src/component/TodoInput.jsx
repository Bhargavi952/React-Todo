import React, { useState } from "react";

const TodoInput = ({inputData}) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    const payload = {
        title:text,
        status: false
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
