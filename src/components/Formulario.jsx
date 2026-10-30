/**
 form className formulario


 campos del formulario
 div className campo
 label Moneda label
 select(input) className select
 options:
 -selecciones
 -dolar USD
 -Peso Mexicano MXN
 -Euro EUR
 -Libra Esterlina GBP

 div className campo
 label CryptoMoneda label
 select(input) className select
 option:
    -seleccione
button className btn-cotizar
Funcionalidad : Al dar clic al btn mostar un "p" que diga "Formulario creado"
 */

import { useState } from "react";
import "../css/Formulario.css";

const Formulario = () => {
  const [mensaje, setMensaje] = useState("");
  const [moneda, setMoneda] = useState("");
  const [criptoMoneda, setCriptoMoneda] = useState("");


   const handleCita = (e) => {
    e.preventDefault();

    if([moneda,criptoMoneda].includes('')){
      window.alert('Error: Todos los campos son obligatorios');
      return;
    }
    setMensaje("Formulario creado")
  };
  return (
    <form className="formulario" onSubmit={(e) => handleCita(e)}>
      <div className="campo">
        <label id="Moneda" htmlFor="Moneda" className="label">
          Moneda
        </label>
        <select 
          className="select" 
          value={moneda}
          onChange={(e) => setMoneda(e.target.value)}>
          <option value="">Selecciones</option>
          <option value="USD">Dolar USD</option>
          <option value="MXN">Peso Mexicano MXN</option>
          <option value="EUR">Euro EUR</option>
          <option value="GBP">Libra Esterlina GBP</option>
        </select>
      </div>
      <div className="campo">
        <label id="criptoMoneda" htmlFor="criptoMoneda" className="label">
          CriptoMoneda
        </label>
        <select 
        className="select"
        value={criptoMoneda}
        onChange={(e) => setCriptoMoneda(e.target.value)}
        >
          <option value="">Seleccione</option>
        </select>
      </div>
      <button type="submit" className="btn-cotizar"> Cotizacion</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default Formulario;
