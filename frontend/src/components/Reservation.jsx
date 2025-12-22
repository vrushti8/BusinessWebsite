import { useState } from "react";

function Reservation() {
  const [data, setData] = useState({
    name: "",
    date: "",
    time: "",
    people: ""
  });

  const submitReservation = async () => {
    await fetch("http://localhost:5000/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    alert("Reservation saved");
  };

  return (
    <section id="reserve">
      <h2>Reserve a Table</h2>
      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} />
      <input type="date" onChange={e => setData({...data, date: e.target.value})} />
      <input type="time" onChange={e => setData({...data, time: e.target.value})} />
      <input placeholder="Number of people" onChange={e => setData({...data, people: e.target.value})} />
      <button onClick={submitReservation}>Book Table</button>
    </section>
  );
}

export default Reservation;
