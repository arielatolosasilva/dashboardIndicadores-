import React, { useEffect, useState } from "react";
import InputIndi from "./InputIndi";

const GetApiIndi = () => {
  const [indicadores, setIndicadores] = useState([]);

  useEffect(() => {

    const fetchApi = async() =>{
        const resp = await fetch("https://mindicador.cl/api");
        const data = await resp.json();
    
        const arr = [];
        Object.keys(data).map((key) => {
          // console.log(key);
          key === "dolar" || key === "euro" || key === "uf" || key === "utm"
            ? arr.push(data[key])
            : console.log("no se mostrara");
        });
        //console.log(arr);
    
        setIndicadores(arr)
    }
    fetchApi()
  }, []);

  return (
    <div className='card-grid'>
      {indicadores.map((item) => (
        <InputIndi key={item.nombre} {...item} />
      ))}
    </div>
  );
};

export default GetApiIndi;
