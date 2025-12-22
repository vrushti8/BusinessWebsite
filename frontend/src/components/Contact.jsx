import { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: ""
  });

  const submitContact = async () => {
    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg)
    });
    alert("Message sent");
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <input placeholder="Name" onChange={e => setMsg({...msg, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setMsg({...msg, email: e.target.value})} />
      <textarea placeholder="Message" onChange={e => setMsg({...msg, message: e.target.value})}></textarea>
      <button onClick={submitContact}>Send</button>
    </section>
  );
}

export default Contact;
