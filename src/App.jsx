import "./App.css";
import AppRouter from "./routers/AppRouter";
import escudoCucei from "./img/escudoqQci.png";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎬 Películas</h1>
      </header>
      <main>
        <AppRouter />
      </main>
      <footer className="footer">
        <div className="footer-info">
          <p>
            <strong>Integrantes:</strong> Moises Alejandro Fernandez Hernandez,
                                          Juan Pablo Valladolid Ramirez,
                                          Yara Susana Vera Godínez,
                                          Cesar Emanuel Hernández Pérez
          </p>
          <p>
            <strong>Profesor:</strong> ZEUS EMANUEL GUTIERREZ COBIAN
          </p>
          <p>
            <strong>Materia:</strong> DESARROLLO DE APLICACIONES WEB EN LA NUBE Y MÓVILES
          </p>
          <p>
            <strong>Calendario escolar:</strong> 2026B
          </p>
          <p>
            <strong>Mes y año:</strong> Noviembre 2026
          </p>
          <p>
            <strong>Institución:</strong> CUCEI – Universidad de Guadalajara
          </p>
        </div>
        <div className="footer-logo">
          <img
            src={escudoCucei}
            alt="Escudo de CUCEI"
            className="escudo-cucei"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;