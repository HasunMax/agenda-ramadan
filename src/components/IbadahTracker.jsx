import { useState } from "react";

const ibadahList = [
  "Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya", "Tarawih", "Tilawah", "Sedekah"
];

export default function IbadahTracker() {
  const [status, setStatus] = useState(() =>
    Object.fromEntries(ibadahList.map((i) => [i, false]))
  );

  const toggle = (item) => {
    setStatus({ ...status, [item]: !status[item] });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-lg font-bold mb-2">Checklist Ibadah Hari Ini</h2>
      <ul className="space-y-2">
        {ibadahList.map((item) => (
          <li key={item}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={status[item]} onChange={() => toggle(item)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
