import { SelectionForm } from "../components/home/Selection";
import { StartButton } from "../components/home/StartButton";
import { Welcome } from "../components/home/welcome";

const Home = () => {
  
  return (
    <>
      <Welcome/>
      <SelectionForm/>
      <StartButton/>
    </>
  )
}

export default Home;