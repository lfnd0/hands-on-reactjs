import { useState } from "react";

export default function App() {
  const [student, setStudent] = useState("Logan");

  function handleChangeName(name) {
    setStudent(name);
  }

  return (
    <div>
      <h1>Meu componente</h1>
      <br />
      <h2>Olá {student}!</h2>
      <button onClick={() => handleChangeName(student === "Logan" ? "Spencer" : "Logan")}>
        Change!
      </button>
    </div>
  );
}
