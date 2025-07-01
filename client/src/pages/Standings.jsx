import { tabla } from "../data/data";

const Standings = () => (
  <div className="min-h-screen px-6 py-8 bg-gray-900">
    <h2 className="text-4xl font-bold text-center text-white mb-8">Tabla de Posiciones</h2>
    <div className="overflow-x-auto">
      <table className="w-full max-w-5xl mx-auto table-auto bg-gray-800 rounded-lg shadow-lg text-sm">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4 text-left">Pos</th>
            <th className="py-3 px-4 text-left">Equipo</th>
            <th className="py-3 px-4">PG</th>
            <th className="py-3 px-4">PE</th>
            <th className="py-3 px-4">PP</th>
            <th className="py-3 px-4">DG</th>
            <th className="py-3 px-4">PTS</th>
            <th className="py-3 px-4">🟡</th>
            <th className="py-3 px-4">🔴</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((t, i) => (
            <tr key={i} className="border-b border-gray-700 hover:bg-gray-700 text-white text-center">
              <td className="py-2 px-4 font-semibold">{i + 1}</td>
              
  
              <div className="flex items-center space-x-2">
    <img src={t.escudo} alt={t.equipo} className="w-6 h-6 object-contain" />
    <span>{t.equipo}</span>
  </div>
              <td className="py-2 px-4">{t.PG}</td>
              <td className="py-2 px-4">{t.PE}</td>
              <td className="py-2 px-4">{t.PP}</td>
              <td className={`py-2 px-4 font-bold ${t.DG > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {t.DG > 0 ? `+${t.DG}` : t.DG}
              </td>
              <td className="py-2 px-4 font-bold text-yellow-400">{t.PTS}</td>
              <td className="py-2 px-4 text-yellow-200 font-semibold">{t.tarjetasAmarillas}</td>
              <td className="py-2 px-4 text-red-400 font-semibold">{t.tarjetasRojas}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Standings;

