import { Link } from "react-router-dom";

export default function Session(props) {
  const { session } = props;
  const { weekday, date, showtimes } = session;
  return (
    <div className="session">
      <h1>
        {weekday} - {date}
      </h1>
      {showtimes.map((showtime) => (
        <Link to={`/assentos/${showtime.id}`}>
          <button key={showtime.id}>{showtime.name}</button>
        </Link>
      ))}
    </div>
  );
}
