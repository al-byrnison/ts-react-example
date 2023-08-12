import { useCounter } from '../hooks/useCounter'

const CounterHook = () => {
    const {valor, acumular} = useCounter(30);
  return (
    <>
        <h3>Contador usando Hook</h3>
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

export default CounterHook