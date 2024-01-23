import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Sobre</h1>

      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/products">Produtos</Link>
      <span> | </span>
      <Link to="/contacts">Contatos</Link>
    </div>
  );
}
