
function HeroeDescripcion({ nombre, descripcion, imagen}) { 
  return (
    <div className="heroe-detalle">
     {imagen && <img src={imagen} alt={nombre} />}
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
  
    </div>
  )
}

export default HeroeDescripcion;