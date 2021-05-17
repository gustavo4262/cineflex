import { Link } from "react-router-dom";

export default function Movie(props) {
  const { movie } = props;
  const route = `/sessoes/${movie.id}`;

  return (
    <div className="movie">
      <Link to={route}>
        <img src={movie.posterURL} alt={movie.title}></img>
      </Link>
    </div>
  );
}
