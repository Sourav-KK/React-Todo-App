import React, { useState } from "react";

export default function TodoForm({ addNewTask }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page from refereshing

    if (newItem === "") return;
    addNewTask(newItem);

    setNewItem(""); // after adding make input null
  };
  return (
    <div className="head">
      <p className="app-name">to-do</p>
      <form className="form-holder" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          id="form-input"
          autoComplete="off"
          placeholder="Enter your task..."
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button type="submit" id="btn-sub">
          Add Task
        </button>
      </form>
    </div>
  );
}
