import { useState } from 'react';
import '../components/Heroes.css'
import heroes from '../data/heroes'
import CartaHeroe from './CartaHeroe'

function Heroes() {
  const [heroeSeleccionado, setHeroeSeleccionado] = useState(null);

  const cerrarDetalle = () => {
    setHeroeSeleccionado(null);
  }

  return (
    <div className="container">
      {heroeSeleccionado ? (
        <div className="detalle-unico">
         
          <div className="carta carta-completa">
            {heroeSeleccionado.imagen && (
              <img 
                src={heroeSeleccionado.imagen} 
                alt={heroeSeleccionado.nombre}
                className="heroe-imagen-grande"
              />
            )}
            <h1>{heroeSeleccionado.nombre}</h1>
            <p className="descripcion-completa">{heroeSeleccionado.descripcion}</p>
           <button>Jugar</button>
          <button className="btn-volver" onClick={cerrarDetalle}>← Volver</button>
          </div>
        </div>
      ) : (
        heroes.map(h => (
          <CartaHeroe 
            key={h.nombre} 
            heroe={h} 
            onVerDetalle={setHeroeSeleccionado}
          />
        ))
      )}
    </div>
  )
}

export default Heroes