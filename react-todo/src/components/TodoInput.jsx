import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yeni görev ekle..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default TodoInput;