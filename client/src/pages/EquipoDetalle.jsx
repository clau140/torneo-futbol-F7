import { useParams, useNavigate } from "react-router-dom";
import { tabla } from "../data/data";
import { motion } from "framer-motion";

const EquipoDetalle = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const equipo = tabla.find((t) => t.equipo === decodeURIComponent(nombre));

  if (!equipo)
    return (
      <p className="text-white text-center mt-10 text-xl font-semibold">
        Equipo no encontrado
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-6 relative overflow-hidden">

      {/* Fondo animado sutil */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-tr from-blue-800 via-purple-800 to-indigo-900 opacity-40 animate-gradient-x"></div>

      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-400 font-semibold mb-6 hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1"
      >
        ← Volver
      </button>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-2xl border border-yellow-400"
      >
        <img
          src={equipo.escudo}
          alt={equipo.equipo}
          className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-yellow-400 shadow-lg"
        />
        <h2 className="text-4xl font-extrabold text-center text-yellow-300 mb-8 tracking-wide drop-shadow-lg">
          {equipo.equipo}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center text-base sm:text-lg">
          <div className="bg-yellow-400 rounded-lg py-3 font-semibold shadow-inner text-black">
            🏆 <span>{equipo.PTS}</span> puntos
          </div>
          <div className="bg-green-500 rounded-lg py-3 font-semibold shadow-inner text-black">
            ✅ Ganados: {equipo.PG}
          </div>
          <div className="bg-gray-500 rounded-lg py-3 font-semibold shadow-inner text-white">
            ➖ Empates: {equipo.PE}
          </div>
          <div className="bg-red-600 rounded-lg py-3 font-semibold shadow-inner text-white">
            ❌ Perdidos: {equipo.PP}
          </div>
          <div className="bg-indigo-500 rounded-lg py-3 font-semibold shadow-inner text-white">
            📈 DG:{" "}
            <span className={equipo.DG > 0 ? "text-green-400" : "text-red-400"}>
              {equipo.DG > 0 ? `+${equipo.DG}` : equipo.DG}
            </span>
          </div>
          <div className="bg-yellow-500 rounded-lg py-3 font-semibold shadow-inner flex flex-col items-center text-black">
            🟡 <span>{equipo.tarjetasAmarillas}</span> Amarillas
          </div>
          <div className="bg-red-700 rounded-lg py-3 font-semibold shadow-inner flex flex-col items-center col-span-2 sm:col-span-1 text-white">
            🔴 <span>{equipo.tarjetasRojas}</span> Rojas
          </div>
        </div>
      </motion.div>

      {/* Animación CSS para fondo */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default EquipoDetalle;
