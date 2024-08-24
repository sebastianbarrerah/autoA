import { useTimeStore } from '@/store/time-store';
import Countdown from 'react-countdown';


const CountDown = () => {
  const stateTimeChage = useTimeStore( state => state.timeChange);

  // Función que se ejecuta cuando el contador termina
  const completionHandler = () => {
    alert('El tiempo se termino');
    stateTimeChage()
    
  };

  // Renderiza el tiempo que disminuye en el contador con estilos personalizados
  const renderer = ({ hours, minutes, seconds, completed }: { hours: number, minutes: number, seconds: number, completed: boolean }) => {
    if (completed) {
      // Renderizado cuando el tiempo se agota
      return <span className='text-red-600 text-xl p-3 my-3'>Tiempo terminado!</span>;
    } else {
      // Renderizado mientras el tiempo está corriendo
      return (
        <div className='text-[24px] font-bold p-3 my-3 rounded-md border'>
          <span>{hours}h </span>
          <span>{minutes}m </span>
          <span>{seconds}s</span>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 10000} // establece fecha de finalización
      onComplete={completionHandler} // Función a ejecutar cuando termine el temporizador
      renderer={renderer} // Función para personalizar la visualización
    />
  );
};

export default CountDown;
