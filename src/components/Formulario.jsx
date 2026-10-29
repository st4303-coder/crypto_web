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

import "../css/Formulario.css";

const Formulario = () => {

  const [mensaje, setMensaje] = useState("");
  return (
    <div className="formulario">
      <div className="campo">
        <label htmlFor="Moneda" className="label">
          Moneda
        </label>
        <select className="select">
          <option value="1">Dolar USD</option>
          <option value="2">Peso Mexicano MXN</option>
          <option value="3">Euro EUR</option>
          <option value="4">Libra Esterlina GBP</option>
        </select>
      </div>
      <div className="campo">
        <label htmlFor="cryptoMoneda" className="label">
          CryptoMoneda
        </label>
        <select className="select">
          <option value="1"></option>
        </select>
      </div>
      <button className="btn-cotizar" onClick={() => setMensaje("Formulario creado")}> Cotizacion</button>
    </div>
  );
};
