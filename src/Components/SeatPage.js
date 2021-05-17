import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Seat from "./Seat";
import Sub from "./Sub";
import Footer from "./Footer";

export default function SeatPage(props) {
  const { idSession } = useParams();
  const { setSessionInfo } = props;
  const [session, setSession] = useState({
    name: "",
    movie: { posterURL: "", title: "" },
    day: { weekday: "" },
  });
  const [seats, setSeats] = useState([]);
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [selectedseats, setSeletedSeats] = useState([]);

  const subs = [
    { id: 1, name: "Selecionado", class: "selected" },
    { id: 2, name: "Disponivel", class: "" },
    { id: 3, name: "Indisponivel", class: "not-available" },
  ];

  useEffect(() => {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`;
    const request = axios.get(url);
    request.then((response) => {
      setSession(response.data);
      setSeats(response.data.seats);
    });
  }, []);

  function reserve() {
    let info = {
      movie: session.movie.title,
      date: `${session.day.date} ${session.name}`,
      name: name,
      cpf: cpf,
      seats: selectedseats,
    };
    setSessionInfo(info);
  }

  return (
    <div className="seat-page">
      <h1>Selecione o(s) assentos(s)</h1>
      <div className="seats">
        {seats.map((seat) => (
          <Seat
            seat={seat}
            seats={selectedseats}
            setSeats={setSeletedSeats}
            key={seat.id}
          ></Seat>
        ))}
      </div>
      <div className="subtitles">
        {subs.map((sub) => (
          <Sub sub={sub} key={sub.id}></Sub>
        ))}
      </div>
      <div className="input">
        <h1>Nome do comprador:</h1>
        <input
          placeholder="Digite seu nome..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
      </div>
      <div className="input">
        <h1>CPF do comprador:</h1>
        <input
          placeholder="Digite seu CPF..."
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
        ></input>
      </div>
      <Link to="/sucesso">
        <button className="confirm" onClick={reserve}>
          Reservar assento(s)
        </button>
      </Link>
      <Footer
        poster={session.movie.posterURL}
        title={session.movie.title}
        session={`${session.day.weekday} - ${session.name}`}
      ></Footer>
    </div>
  );
}
