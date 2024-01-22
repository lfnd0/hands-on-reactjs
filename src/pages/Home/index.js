import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/about">Sobre</Link>
      <span> | </span>
      <Link to="/contacts">Contatos</Link>
    </div>
  );
}
