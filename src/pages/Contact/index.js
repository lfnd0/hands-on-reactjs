import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <h1>Contatos</h1>
      <span>Email: example@mail.com.br</span>

      <br />

      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">Sobre</Link>
    </div>
  );
}
