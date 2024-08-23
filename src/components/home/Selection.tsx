import { useState } from "react"

export const SelectionForm = () => {
  const [level, setLevel] = useState('');
  const [technologies, setTechnologies] = useState('');

    return (
    <div className="flex flex-col items-center my-10 space-y-6">
        <div className="flex flex-col items-center">
            <label htmlFor="level" className="text-black text-lg font-semibold mb-2">
                Nivel
            </label>
            <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="px-4 py-2 bg-[#ff7e08] text-white rounded-md"
            >
                <option value="" disabled>Selecciona un nivel</option>
                <option value="Alto">Alto</option>
                <option value="Medio">Medio</option>
                <option value="Bajo">Bajo</option>
            </select>
        </div>

        <div className="flex flex-col items-center">
            <label htmlFor="technologies" className="text-black text-lg font-semibold mb-2">
                Tecnología
            </label>
            <select
                id="technologies"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
                className="px-4 py-2 bg-[#ff7e08] text-white rounded-md"
            >
                <option value="" disabled>Selecciona una tecnología</option>
                <option value="Java">Java</option>
                <option value="C#">C#</option>
                <option value="Python">Python</option>
            </select>
        </div>
    </div>
  )
}
