import Navbar from "@/components/shared/Navbar"
import { useForm } from "react-hook-form";

    interface InfoRegister{
        name: string;
        email: string;
        coe: Coe
    }
    enum Coe {
        Desarrolloyarquitectura = "Desarrollo y arquitectura",
        calidad = "calidad",
    }

const RegisterPage = () => {
    const { handleSubmit, reset, register } = useForm<InfoRegister>();

    const handleForm = (data: InfoRegister) => {
        console.log(data);
        reset()
    }
  return (
    <>
        <Navbar/>
    <section className="flex flex-col gap-10 h-screen items-center ">
        <h1 className="text-xl">Contacto</h1>
        <p className="w-2/4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, blanditiis a molestias eius eveniet voluptatibus perspiciatis nesciunt quo! Pariatur, recusandae!</p>

        <form className="flex flex-col gap-10 w-[40%]" onSubmit={handleSubmit(handleForm)}>
            <input type="text" {...register('name')} placeholder="Escribre tu nombre" className="rounded-lg px-3 py-1 h-10 border border-orange-400 dark:text-slate-950 dark:border-none" />

            <input type="email" placeholder="Escribre el correo electronico"  className="rounded-lg px-3 py-1 h-10 border border-orange-400 dark:text-slate-950 dark:border-none" {...register("email")}/>

            <select className="rounded-lg px-3 py-1 h-10 border border-orange-400 dark:text-slate-950 dark:border-none" {...register("coe")}>
                <option defaultChecked>Selecciona tu CoE</option>
                <option value="Desarrollo y arquitectura">Desarrollo y arquitectura</option>
                <option value="Calidad">Calidad</option>
                <option value="Desarrollo y arquitectura">Desarrollo y arquitectura</option>
                <option value="Desarrollo y arquitectura">Desarrollo y arquitectura</option>
            </select>
            <button className="bg-orange-500 w-1/2 py-2 px-4 rounded-xl hover:bg-slate-600 dark:hover:text-white">Registrar</button>
        </form>
    </section>
    </>
  )
}

export default RegisterPage;