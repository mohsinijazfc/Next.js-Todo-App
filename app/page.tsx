"use client";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  return (
    <main style={{ padding: 40 }}>
      <h1>To-Do App</h1>
      <input value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={()=>{
        setTodos([...todos, text]);
        setText("");
      }}>Add</button>

      <ul>
        {todos.map((t,i)=><li key={i}>{t}</li>)}
      </ul>
    </main>
  );
}

