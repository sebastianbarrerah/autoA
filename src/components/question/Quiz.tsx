import { useTimeStore } from '@/store/time-store';
import React, { useState } from 'react';

const Quiz = () => {
  const stateTime = useTimeStore( state => state.timeDown);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  console.log(stateTime);
  

  return (
    <div className={`mx-auto rounded-xl shadow-md space-y-4 border px-6 py-2 w-4/5 ${!stateTime? "pointer-events-none opacity-30": ''}`}>
      <h2 className="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In reference to its effect on established Lorem Syndrome, select the correct answer.</h2>
      <p className="text-gray-500">Seleccione la respuesta</p>
      <form className="space-y-4">
        <div className={`p-4 border rounded cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 ${selectedOption === 'A' ? 'bg-orange-500' : ''}`}>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              value="A"
              checked={selectedOption === 'A'}
              onChange={handleOptionChange}
              className="form-radio cursor-pointer"
            />
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </label>
        </div>
        <div className={`p-4 border rounded cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 ${selectedOption === 'B' ? 'bg-orange-500' : ''}`}>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              value="B"
              checked={selectedOption === 'B'}
              onChange={handleOptionChange}
              className="form-radio cursor-pointer"
            />
            <span>Quisque vel turpis a quam bibendum varius.</span>
          </label>
        </div>
        <div className={`p-4 border rounded cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 ${selectedOption === 'C' ? 'bg-orange-500' : ''}`}>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              value="C"
              checked={selectedOption === 'C'}
              onChange={handleOptionChange}
              className="form-radio cursor-pointer"
            />
            <span>Nullam ac urna eu felis dapibus condimentum.</span>
          </label>
        </div>
        <div className={`p-4 border rounded cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 ${selectedOption === 'D' ? 'bg-orange-500' : ''}`}>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              value="D"
              checked={selectedOption === 'D'}
              onChange={handleOptionChange}
              className="form-radio cursor-pointer"
            />
            <span>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Quiz;
