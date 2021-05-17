import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Session from "./Session";
import Footer from "./Footer";

export default function SessionPage() {
  const { idMovie } = useParams();
  const [data, setData] = useState({ posterURL: "", title: "", session: "" });
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`;
    const request = axios.get(url);
    request.then((response) => {
      setData(response.data);
      setSessions(response.data.days);
    });
  }, []);

  return (
    <div className="session-page">
      <h1>Selecione o horário</h1>
      <div className="sessions">
        {sessions.map((session) => (
          <Session session={session} key={session.id}></Session>
        ))}
      </div>
      <Footer poster={data.posterURL} title={data.title}></Footer>
    </div>
  );
}
