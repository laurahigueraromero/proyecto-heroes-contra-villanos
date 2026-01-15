import { useState } from 'react';
import '../components/Heroes.css'
import villanos from '../data/villanos'
import CartaVillano from './CartaVillano'


function Villanos() {
  const [villanoSeleccionado, setVillanoSeleccionado] = useState(null);

  const cerrarDetalle = () => {
    setVillanoSeleccionado(null);
  }

  return (
    <div className="container">
      {/* Si hay un villano seleccionado, mostrar solo ese */}
      {villanoSeleccionado ? (
        <div className="detalle-unico">
          <button className="btn-volver" onClick={cerrarDetalle}>← Volver</button>
          <div className="carta carta-completa">
            {villanoSeleccionado.imagen && (
              <img 
                src={villanoSeleccionado.imagen} 
                alt={villanoSeleccionado.nombre}
                className="villano-imagen-grande"
              />
            )}
            <h1>{villanoSeleccionado.nombre}</h1>
            <p className="descripcion-completa">{villanoSeleccionado.descripcion}</p>
            {villanoSeleccionado.poder && <p><strong>Poder:</strong> {villanoSeleccionado.poder}</p>}
          </div>
        </div>
      ) : (
        /* Si no, mostrar todos los villanos */
        <>
          
          <div className="container">
            {villanos.map(v => (
              <CartaVillano 
                key={v.id || v.nombre} 
                villano={v} 
                onVerDetalle={setVillanoSeleccionado}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Villanos