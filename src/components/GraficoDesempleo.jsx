import React from "react";
import { LineChart } from "react-chartkick";
import "chart.js";

const GraficoDesempleo = ({ fecha, valor }) => {
  return (
    <div>
      <LineChart data={[[`${fecha}`, `${valor}`]]} />
    </div>
  );
};

export default GraficoDesempleo;
