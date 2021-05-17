export default function Sub(props) {
  const { sub } = props;
  return (
    <div className="sub">
      <button className={sub.class}></button>
      <h2>{sub.name}</h2>
    </div>
  );
}
