import React from "react";

export default function CalendarView({ items }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>📅 Calendar</h2>

      {items.length === 0 && (
        <p>No jobs yet.</p>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10
          }}
        >
          <strong>{item.title}</strong>
          <div>
            {item.date} {item.time}
          </div>
          <div>${item.pay}</div>
        </div>
      ))}
    </div>
  );
}
