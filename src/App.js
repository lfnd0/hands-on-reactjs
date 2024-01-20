import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([
    "Estudar ReactJS",
    "Ler livro Engenharia de Software Moderna"
  ]);

  function handleRegister(event) {
    event.preventDefault();
    setTask([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h1>To-Do List</h1>

      <form onSubmit={handleRegister}>
        <label>Título da tarefa:</label><br />
        <input
          placeholder="Insira sua tarefa"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /><br />

        <button type="submit">Adicionar Tarefa</button><br />
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
