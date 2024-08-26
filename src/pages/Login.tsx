
import Navbar from "@/components/shared/Navbar"
import astronauta from "../assets/astronauta.png"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  return (
    <main className="dark:bg-fDark bg-flight bg-no-repeat bg-cover h-screen flex flex-col">
      <Navbar/>
      <section className="flex flex-col md:flex-row justify-center items-center gap-4 p-4 mt-20 md:mt-0">
        <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center text-center md:text-left">
          <span className="text-2xl md:text-3xl font-light">A TU ALCANCE</span>
          <span className="text-4xl md:text-5xl font-bold">TU TEST</span>
          <span className="text-4xl md:text-5xl font-bold">TECNOLOGICO</span>
          <span className="text-base md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla facere optio inventore quos non quaerat voluptas commodi labore nisi a dicta nam voluptatum, quas dolorum aperiam. Nobis, ipsum placeat?</span>
          <button className="px-6 py-2 rounded-xl bg-orange-500 w-full md:w-1/2 text-base md:text-xl hover:bg-slate-600 dark:hover:text-white" onClick={() => navigate('/registro')}>Registro</button>
        </div>
        <img src={astronauta} alt="astronauta" className="w-1/4 md:w-1/4" />
      </section>
    </main>
  )
}

export default Login
