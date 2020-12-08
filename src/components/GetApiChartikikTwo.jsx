import React, { useEffect, useState } from "react";
import 'chart.js'
import GraficoDesempleo from "./GraficoDesempleo";
const GetApiDesempleo = () => {

    const [fechaValor, setFechaValor] = useState([]);
  


    useEffect(() => {
  
      const fetchApiDesempleo = async() =>{
          const resp = await fetch("https://mindicador.cl/api/tasa_desempleo");
          const data = await resp.json();
   
     const arrFechaValor=[];
   
     data.serie.map(elemento => arrFechaValor.push(elemento)
    
     )
    console.log(arrFechaValor)
   
   
          setFechaValor( arrFechaValor)
   

      }
      fetchApiDesempleo()
    }, []);



    return (

        
        <div>
            {
       fechaValor.map((elemento ,i)=> <GraficoDesempleo  key={i} {...elemento}/>)
     
   
       }
          
        </div>
    )
}

export default GetApiDesempleo