import villano from '../data/villanos'
import '../components/Heroes.css'
import CartaVillano from './CartaVillano'
function Villanos() {
  return (
   < div>
     <h2 className='villanos'>Villanos:</h2>
    <div className='container'>
     
      {villano.map(v=> <CartaVillano key={v.nombre} {...v}/>)}
    </div>
    </div>
  )
}

export default Villanos