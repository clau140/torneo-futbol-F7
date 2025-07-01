import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import Standings from "./pages/Standings";

const App = () => {
  return (
    <div>
     <nav className="bg-gray-800 text-gray-200 px-6 py-4 flex gap-6 shadow-md">
  <Link to="/" className="hover:text-white transition">Inicio</Link>
  <Link to="/teams" className="hover:text-white transition">Equipos</Link>
  <Link to="/matches" className="hover:text-white transition">Fixture</Link>
  <Link to="/standings" className="hover:text-white transition">Tabla</Link>
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
    </div>
  );
};

export default App;

