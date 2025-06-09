import { useState } from "react";

export default function CatatanHarian() {
  const [catatan, setCatatan] = useState("");
  const [log, setLog] = useState([]);

  const tambahCatatan = () => {
    if (catatan.trim()) {
      setLog([...log, { text: catatan, waktu: new Date().toLocaleString() }]);
      setCatatan("");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-bold mb-2">Catatan Ramadan</h2>
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        value={catatan}
        onChange={(e) => setCatatan(e.target.value)}
        placeholder="Tulis refleksi atau doa..."
      />
      <button
        onClick={tambahCatatan}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
      >
        Simpan
      </button>
      <ul className="mt-4 space-y-2">
        {log.map((entry, i) => (
          <li key={i} className="text-sm bg-gray-100 p-2 rounded">
            <strong>{entry.waktu}</strong>: {entry.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
