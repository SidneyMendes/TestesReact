import React from "react";
import "./styles.css";

export default function App() {
  const main = item => {
    const tipoInt = item.tipoInstituicao
      ? parseInt(item.tipoInstituicao, 0)
      : false;
    if (tipoInt) {
      console.log(tipoInt);
    } else {
      console.log("não tipoInstituicao");
    }
    item.valido ? console.log(item.valido) : console.log("não valido");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => main({ tipoInstituicao: 1, valido: true })}>
        CLICK Main
      </button>
      <button
        onClick={() => {
          main({ tipoInstituicao: 1 });
        }}
      >
        CLICK Evento 01
      </button>
      <button
        onClick={() => {
          main({ valido: true });
        }}
      >
        CLICK Evento 02
      </button>
    </div>
  );
}
