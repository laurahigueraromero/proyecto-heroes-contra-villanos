import '../pages/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import user from '../data/users.js'

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuarioEncontrado = user.find(
      u => u.usuario === usuario && u.contraseña === contraseña
    );

    if (usuarioEncontrado) {
      // Login exitoso
      navigate(`/multiverso/${usuario}`);
    } else {
      // Login fallido
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className='contenedor-login'>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        /><br />
        <input 
          type="password" 
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        /> <br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default Login