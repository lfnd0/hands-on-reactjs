import { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [nutrition, setNutrition] = useState([]);

  function loadDataFromNutritionAPI() {
    const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

    fetch(url)
      .then(respose => respose.json())
      .then(data => setNutrition(data))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    loadDataFromNutritionAPI();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>Artigos Sobre Nutrição</strong>
      </header>

      {
        nutrition.map(item => {
          return (
            <article className="posts" key={item.id}>
              <strong className="title">{item.titulo}</strong>

              <img src={item.capa} alt={item.titulo} />

              <p className="subtitle">
                {item.subtitulo}
              </p>

              <a className="button" href="/" title={item.titulo}>Ler Artigo</a>
            </article>
          );
        })
      }
    </div>
  );
}
