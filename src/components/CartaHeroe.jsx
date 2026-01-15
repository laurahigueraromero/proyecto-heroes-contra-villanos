import '../components/CartaHeroe.css'

function CartaHeroe({ heroe, onVerDetalle }) {

  return (
    <div className="carta">
      <p className='nombre'>{heroe.nombre}</p>
  
      <button onClick={() => onVerDetalle(heroe)}>detalles</button>
    </div>
  )
}

export default CartaHeroe;