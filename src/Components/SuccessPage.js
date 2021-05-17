import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Success(props) {
  const { info } = props;

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many";
    const data = {
      ids: info.seats.map((s) => s.id),
      name: info.name,
      cpf: info.cpf,
    };
    const request = axios.post(url, data);
  }, []);

  return (
    <div className="success-page">
      <h1>
        Pedido feito <br />
        com sucesso
      </h1>
      <h2>Filme e sessão</h2>
      <h3>{info.movie}</h3>
      <h3>{info.date}</h3>
      <h2>Ingressos</h2>
      {info.seats.map((s) => (
        <h3>Assento {s.name}</h3>
      ))}
      <h2>Comprador</h2>
      <h3>{info.name}</h3>
      <h3>{info.cpf}</h3>
      <Link to="/">
        <button>Voltar pra Home</button>
      </Link>
    </div>
  );
}
