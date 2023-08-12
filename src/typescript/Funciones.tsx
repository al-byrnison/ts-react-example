import React from 'react'

const Funciones = () => {

    const sumar = ( a: number, b: number ): number => {
       return a + b;
    }
    const num_1: number = 5;
    const num_2: number = 10;


  return (
    <>
    <h3>Funciones</h3>
    <p>La suma será: {num_1} + {num_2}</p>
    <span>El resultado es: { sumar(num_1, num_2) }</span>
    </>
  )
}

export default Funciones