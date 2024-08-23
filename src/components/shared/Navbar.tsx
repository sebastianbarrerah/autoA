import Toggle from "./Toggle"
import logo from "../../assets/AutoAprendo2.png"
const Navbar = () => {
  return (
    <ul className="flex justify-around  py-5  bg-slate-950/50 items-center"> 
        <div className="flex  gap-10 justify-center ">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <li className="content-center">Inicio</li>
            <li className="content-center">Servicios</li>
        </div>
        <div className="flex gap-10">
            <li>Iniciar sesión</li>
    <Toggle/>
        </div>
    </ul>
  )
}

export default Navbar;