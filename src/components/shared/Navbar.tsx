import Toggle from "./Toggle"
import logo from "../../assets/AutoAprendo2.png"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className="flex justify-around  py-5 bg-slate-950/20 items-center"> 
        <div className="flex  gap-10 justify-center ">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <li className="content-center cursor-pointer hover:text-yellow-400 hover:font-bold hover:text-['18px']">Inicio</li>
            <li className="content-center cursor-pointer hover:text-yellow-400 hover:font-bold hover:text-['18px']" onClick={() => navigate('/preguntas')}>Preguntas</li>
        </div>
        <div className="flex gap-10">
            <li className=" cursor-pointer hover:text-yellow-400 hover:font-bold hover:text-['18px']">Iniciar sesión</li>
    <Toggle/>
        </div>
    </ul>
  )
}

export default Navbar;