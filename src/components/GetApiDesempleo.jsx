import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const GetApiDesempleo = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchApiDesempleo = async () => {
      const resp = await fetch("https://mindicador.cl/api/tasa_desempleo");
      const data = await resp.json();

      const arrFecha = [];
      const arrValor = [];
      data.serie.map((elemento) => {
        const str = elemento.fecha;
        const res = str.substring(0, 10);

        return arrFecha.push(res), arrValor.push(elemento.valor);
      });
      //console.log(arrFecha)
      //console.log(arrValor)

      setChartData({
        labels:arrFecha.reverse(),
        datasets: [
          {
            label: "Tasa de desempleo",
            data: arrValor.reverse(),
            backgroundColor: "rgba(255,255,255,0.5)",
            borderColor: "#F08080",
            borderWidth: 4,
          },
        ],
      });
    };
    fetchApiDesempleo();
  }, []);

  return (
    <div className="App">
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default GetApiDesempleo;
