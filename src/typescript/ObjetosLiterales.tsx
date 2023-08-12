import React from 'react'
/* 
Solo para validar y poner reglas al objeto y 
no para crear instancias como 
const persona =  new Persona()
*/

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Beto',
        edad: 30,
        direccion: {
            pais: 'chile',
            casaNo: 908
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
  )
}

export default ObjetosLiterales