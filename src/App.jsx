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
        <div className="footer-column">
          <h3>Integrantes</h3>
          <p>Moises Alejandro Fernandez Hernandez</p>
          <p>Juan Pablo Valladolid Ramirez</p>
          <p>Yara Susana Vera Godínez</p>
          <p>Cesar Emanuel Hernández Pérez</p>
        </div>
        <div className="footer-column">
          <h3>Información del Curso</h3>
          <p><strong>Profesor:</strong> ZEUS EMANUEL GUTIERREZ COBIAN</p>
          <p><strong>Materia:</strong> DESARROLLO DE APLICACIONES WEB EN LA NUBE Y MÓVILES</p>
          <p><strong>Calendario escolar:</strong> 2026B</p>
          <p><strong>Mes y año:</strong> Noviembre 2026</p>
        </div>
        <div className="footer-column">
          <h3>Institución</h3>
          <p>CUCEI – Universidad de Guadalajara</p>
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