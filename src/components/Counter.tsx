import React, { useState } from 'react'

const Counter = () => {
    const [valor, setValor] = useState<number>(10);

    const acumular = (numero: number) => {
        setValor(valor + numero)
    }
  return (
    <>
        <h3>Contador</h3>
        <br />
        <p>Count: <small>{valor}</small></p>
        <button className='btn btn-primary' onClick={ () => acumular(1) }>
            +1
        </button>
        &nbsp; 
        <button className='btn btn-danger' onClick={ () => acumular(-1) } >
            -1
        </button>
    </>
  )
}

export default Counter