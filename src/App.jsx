import IbadahTracker from "./components/IbadahTracker";
import JadwalSholat from "./components/JadwalSholat";
import CatatanHarian from "./components/CatatanHarian";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Agenda Ramadan</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <JadwalSholat />
        <IbadahTracker />
        <CatatanHarian />
      </div>
    </div>
  );
}
