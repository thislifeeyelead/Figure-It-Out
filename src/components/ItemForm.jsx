import React, { useState } from "react";

export default function ItemForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    pay: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title) return;

    onAdd({
      ...form,
      id: Date.now(),
      completed: false
    });

    setForm({ title: "", date: "", time: "", pay: "" });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="date"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })}
      />
      <input
        type="time"
        value={form.time}
        onChange={e => setForm({ ...form, time: e.target.value })}
      />
      <input
        placeholder="Pay"
        value={form.pay}
        onChange={e => setForm({ ...form, pay: e.target.value })}
      />

      <button type="submit">Add</button>
    </form>
  );
}
