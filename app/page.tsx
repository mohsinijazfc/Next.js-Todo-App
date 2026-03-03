"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main style={styles.container}>
      <h1>📝 To-Do App</h1>

      <div style={styles.inputBox}>
        <input
          style={styles.input}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button style={styles.button} onClick={addTodo}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            {todo}
            <button
              style={styles.deleteBtn}
              onClick={() => deleteTodo(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 15px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
    fontSize: "18px",
  },
  deleteBtn: {
    marginLeft: "10px",
    cursor: "pointer",
  },
};
