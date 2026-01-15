import { useState } from 'react'
import '../components/CartaHeroe.css'

function CartaVillano({villano}) {

 if (!villano) {
    return <div className="carta">Cargando villano...</div>;
  }





  return (
    <div className="carta">
      <img src={villano.imagen} alt=""  className='img-villano'/>
      <p className='nombre'>  {villano.nombre}</p>
      <p> {villano.descripcion}</p>
    
    </div>
  )
}

export default CartaVillano