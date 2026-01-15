import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login'
import Inicio from '../pages/Inicio'
import Error from '../pages/Error'
import Combate from "../pages/Combate";


function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/multiverso/:ususario" element={<Inicio/>}/>
      <Route path="/combate/:usuario" element={<Combate/>}/>
       <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;