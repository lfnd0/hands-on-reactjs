import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [user, setUser] = useState({});

  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleRegister(event) {
    event.preventDefault();
    setUser({
      name,
      age,
      email,
    });
    setFormSubmitted(true);
    alert(`Bem vindo ${name}, seu cadastro foi realizado com sucesso!`)
  }

  return (
    <div>
      <h1>Cadastre-se</h1>

      <form onSubmit={handleRegister}>
        <label>Nome:</label><br />
        <input
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        /><br />

        <label>E-mail:</label><br />
        <input
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        /><br />

        <label>Idade:</label><br />
        <input
          placeholder="Digite sua idade"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        /><br />

        <button type="submit">Cadastrar</button><br />
      </form>

      {
        formSubmitted &&
        <div>
          <span>Nome: {user.name}</span><br />
          <span>E-mail: {user.email}</span><br />
          <span>Idade: {user.age}</span><br />
        </div>
      }
    </div>
  );
}
