import CountDown from "./CountDown";
// import CodeEditor from "./Editor";
import Quiz from "./Quiz";

const Question = () => {

  return (
    <main className="h-full">
      <section className="flex gap-5 justify-end px-4 sm:px-10">
        <button className="text-lg">Tiempo restante: </button>
        <CountDown />
      </section>

      <section className={`flex flex-col gap-2 sm:flex-row `}>
        <div className="w-full px-2 sm:px-4">
          <Quiz />
        </div>

        {/* <div className="w-full sm:w-1/2 px-2 sm:px-4">
          <CodeEditor />
        </div> */}
      </section>

      <section className="flex justify-end px-4 sm:px-10">
        <button className="px-6 py-3 sm:px-8 sm:py-4 bg-orange-500 rounded-xl my-5 text-base sm:text-xl transition-all hover:bg-slate-300 dark:hover:bg-slate-800">
          Siguiente pregunta 
        </button>
      </section>
    </main>
  );
};

export default Question;
