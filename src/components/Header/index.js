import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Bem vindo(a)!</h2>

      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">Sobre</Link>
      <span> | </span>
      <Link to="/contacts">Contatos</Link>
    </header>
  );
}
