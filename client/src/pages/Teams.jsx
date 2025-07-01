import { useNavigate } from "react-router-dom";
import { tabla } from "../data/data";

const Teams = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Equipos Participantes</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tabla.map((equipo, idx) => (
          <div
            key={idx}
            onClick={() => navigate(`/equipo/${encodeURIComponent(equipo.equipo)}`)}
            className="group cursor-pointer bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 rounded-xl p-4 text-center shadow-lg shadow-blue-900/50"
          >
            <img
              src={equipo.escudo}
              alt={equipo.equipo}
              className="w-16 h-16 mx-auto mb-3 object-contain transition-transform duration-300 group-hover:rotate-12"
            />
            <p className="text-lg font-semibold text-yellow-300 tracking-wide">{equipo.equipo}</p>
            <div className="text-sm mt-1 text-yellow-400 font-bold">🏆 {equipo.PTS} Puntos</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

