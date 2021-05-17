import { useState } from "react";

export default function Seat(props) {
  const { seat, seats, setSeats } = props;
  const [className, setClassName] = useState(
    seat.isAvailable ? "" : "not-available"
  );

  function selectSeat() {
    if (className.search("not-available") !== -1) {
      alert("Esse assento não está disponível");
      return;
    }
    seat.isAvailable = !seat.isAvailable;
    let newClassName = className;
    if (newClassName.search("selected") === -1) {
      newClassName += "selected";
      setSeats([...seats, seat]);
    } else {
      newClassName = newClassName.replace("selected", "");
      let arr = seats.filter((s) => s !== seat);
      setSeats(arr);
    }

    setClassName(newClassName);
  }

  return (
    <button className={className} onClick={selectSeat}>
      {seat.name}
    </button>
  );
}
