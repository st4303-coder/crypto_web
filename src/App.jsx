import { useState } from "react";
import Formulario from "./components/Formulario.jsx";
import "./css/App.css";
import logo from "./assets/logo_cripto.png";

const App = () => {
  const [cotizacion, setCotizacion] = useState("");
  const [spinner, setSpinner] = useState(false);

  return (
    <div className="contenedor">
      <h1 className="titulo">
        Cotizador de <span className="tituloBold">CriptoMonedas</span>
      </h1>
      <div>
        <img src={logo} alt="Logo de criptoMoneda" className="imagen-cripto" />
      </div>
      <div className="contenido-grid">
        <Formulario 
        cotizacion={cotizacion}
        setCotizacion={setCotizacion} 
        spinner={spinner}
        setSpinner={setSpinner} 
        />

        {spinner && (
          <div className="spinner-container">
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div></div>
            </div>
          </div>
        )}

        {cotizacion && !spinner && (
          <div className="resultado-contenedor">
            <p className="texto">{cotizacion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
