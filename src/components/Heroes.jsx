import { useHeroeStore } from '../store/heroeStore';
import '../components/Heroes.css'
import heroes from '../data/heroes'
import CartaHeroe from './CartaHeroe'
import { Navigate, useNavigate } from 'react-router-dom';

function Heroes() {
  const heroeSeleccionado = useHeroeStore((state) => state.heroeSeleccionado);
  const setHeroeSeleccionado = useHeroeStore((state) => state.setHeroeSeleccionado);
  const cerrarDetalle = useHeroeStore((state) => state.cerrarDetalle);
  const navigate = useNavigate();


  const accederCombate = ()=>{
    navigate("/combate/:usuario")
  }



  return (
    <div className="container">
      {heroeSeleccionado ? (
        <div className="detalle-unico">
          <button className="btn-volver" onClick={cerrarDetalle}>← Volver</button>
          <div className="carta carta-completa">
            {heroeSeleccionado.imagen && (
              <img 
                src={heroeSeleccionado.imagen} 
                alt={heroeSeleccionado.nombre}
                className="heroe-imagen-grande"
              />
            )}
            <h1>{heroeSeleccionado.nombre}</h1>
            <p>{heroeSeleccionado.descripcion}</p>
             <button className="btn-volver" onClick={cerrarDetalle}>← Volver</button>
            <button onClick={accederCombate}>Jugar</button>
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