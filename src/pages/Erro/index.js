import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div>
      <h1>404 - Página Não Econtrada</h1>

      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/about">Sobre</Link>
      <span> | </span>
      <Link to="/contacts">Contatos</Link>
    </div>
  );
}
