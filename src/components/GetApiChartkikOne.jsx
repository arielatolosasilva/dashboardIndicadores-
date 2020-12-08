import React, { useEffect, useState } from "react";
import { LineChart } from 'react-chartkick'
import 'chart.js'
const GetApiDesempleo = () => {

    const [fecha, setFecha] = useState([]);
    const [valor, setValor] = useState([]);


    useEffect(() => {
  
      const fetchApiDesempleo = async() =>{
          const resp = await fetch("https://mindicador.cl/api/tasa_desempleo");
          const data = await resp.json();
   
     const arrFecha=[];
     const arrValor=[];
     data.serie.map( (elemento) => {
         return arrFecha.push(elemento.fecha), arrValor.push(elemento.valor)
        })
    //console.log(arrFechaValor)
   
   
          setFecha( arrFecha)
          setValor( arrValor)

      }
      fetchApiDesempleo()
    }, []);



    return (

        
        <div>
            {
       <LineChart data={[[`${fecha}`,`${valor}`]]} />
     
   
       }
          
        </div>
    )
}

export default GetApiDesempleo
