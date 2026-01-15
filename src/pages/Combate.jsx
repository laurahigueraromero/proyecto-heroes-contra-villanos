import { useState, useEffect } from 'react'; 
import { useHeroeStore } from "../store/heroeStore"
import villanos from '../data/villanos'
import CartaVillano from '../components/CartaVillano';
import '../pages/Combate.css'
import { useNavigate } from 'react-router-dom';

function Combate() {
    const heroeSeleccionado = useHeroeStore((state) => state.heroeSeleccionado);
    const [villanoActual, setVillanoActual] = useState(null);
    const navigate = useNavigate();

    const volver = ()=>{
      navigate(-1)
    }




useEffect(() => {
 

const indiceAleatorio = Math.floor(Math.random() * villanos.length);
    setVillanoActual(villanos[indiceAleatorio]);




  }, []);
  if (!villanoActual) {
    return <div className="combate-loading">Cargando villano...</div>;
  }
   const cambiarVillano = () => {
    const indice = Math.floor(Math.random() * villanos.length);
    setVillanoActual(villanos[indice]);
  }
  
  return <div>
    <button onClick={volver}>volver</button>
    
    <h2 className='titulo'>Héroe seleccionado:</h2>
    <div className="carta">
            {heroeSeleccionado.imagen && (
              <img 
                src={heroeSeleccionado.imagen} 
                alt={heroeSeleccionado.nombre} 
                className='img-heroe'
              />
            )}
            <p className='nombre'>{heroeSeleccionado.nombre}</p>
            <p className='descripcion'>{heroeSeleccionado.descripcion}</p>
          </div>
   <h2 className='aleatorio'>Villano aleatorio:</h2>
          <CartaVillano villano={villanoActual} onVerDetalle={() => {}} />
            <button className="btn-cambiar-villano" onClick={cambiarVillano}>
        🔄 Cambiar villano
      </button>
  </div>
}

export default Combate;