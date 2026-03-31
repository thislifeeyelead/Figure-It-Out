import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import CalendarView from "./components/CalendarView";
import ItemForm from "./components/ItemForm";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("darcy_scheduler");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darcy_scheduler", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <Dashboard />
      <ItemForm onAdd={(item) => setItems([...items, item])} />
      <CalendarView items={items} />
    </div>
  );
}
