import { partidos, tabla } from "../data/data";

const getEscudo = (equipo) => {
  const encontrado = tabla.find((t) => t.equipo === equipo);
  return encontrado ? encontrado.escudo : "";
};

const parseFecha = (fechaStr) => {
  const meses = {
    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
  };
  const partes = fechaStr.toLowerCase().split(" de ");
  const dia = parseInt(partes[0]);
  const mes = meses[partes[1]];
  return new Date(new Date().getFullYear(), mes, dia);
};

const Matches = () => {
  const hoy = new Date();

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Fixture</h2>
      <div className="max-w-4xl mx-auto grid gap-6">
        {partidos.map((p, i) => {
          const fechaPartido = parseFecha(p.fecha);
          const estado = fechaPartido < hoy ? "Finalizado" : "Próximo";

          return (
            <div
              key={i}
              className="bg-gray-800 border-l-4 border-blue-500 p-6 rounded-xl shadow-lg hover:shadow-blue-900/50 transition duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-gray-400">
                  📅 {p.fecha} · 🕒 {p.hora} · 📍 {p.cancha}
                </p>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    estado === "Finalizado"
                      ? "bg-green-700 text-green-300"
                      : "bg-yellow-700 text-yellow-200"
                  }`}
                >
                  {estado}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <img src={getEscudo(p.local)} alt={p.local} className="w-6 h-6 object-contain" />
                  <span>{p.local}</span>
                </div>

                <span className="text-xl font-bold text-yellow-300">
                  {estado === "Finalizado"
                    ? `${p.golesLocal} - ${p.golesVisitante}`
                    : "vs"}
                </span>

                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>{p.visitante}</span>
                  <img src={getEscudo(p.visitante)} alt={p.visitante} className="w-6 h-6 object-contain" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Matches;


