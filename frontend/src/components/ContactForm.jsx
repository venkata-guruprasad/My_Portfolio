import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // input values update cheyyadaniki
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // form submit → backend ki data pampadam
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("⚠️ Backend not reachable.");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </section>
  );
}

export default ContactForm;