import React from "react";
import "../../src/index.css";

const InputIndi = ({ nombre, valor }) => {
  let num = valor.toLocaleString("es-CL");
  return (
    <>
      <div className="card">
        <p>{nombre}</p>
        <p>{`$ ${num}`}</p>
      </div>
    </>
  );
};

export default InputIndi;
