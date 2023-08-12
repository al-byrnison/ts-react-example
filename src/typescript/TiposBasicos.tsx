import React from 'react'

const TiposBasicos = () => {

    const nombre: string = 'Alfonso';
    const edad: number = 38;
    const estatus: boolean = true;

    const poderes: string[] = ['volar', 'velocidad', 'rasho lazer'];

    poderes.push('control mental');

  return (
    <>
    <h3>Tipos Básicos</h3>
    {nombre}, {edad}, { (estatus) ?  'active' : 'inactive'}
    <br />
    <p>PODERES</p>
    {poderes.join(', ')}
    </>
  )
}

export default TiposBasicos;

