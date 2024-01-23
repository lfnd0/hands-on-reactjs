import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {
        id ?
          (<span>Produto selecionado: {id}.</span>)
          :
          (<span> Nenhum produto selecionado.</span>)
      }
    </div>
  );
}
