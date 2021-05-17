export default function Footer(props) {
  const { poster, title, session } = props;

  return (
    <div className="footer">
      <img src={poster} alt={title}></img>
      <div className="movie">
        <h1>{title}</h1>
        {session ? <h1>{session}</h1> : ""}
      </div>
    </div>
  );
}
