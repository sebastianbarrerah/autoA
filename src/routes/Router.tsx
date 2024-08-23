import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "@/pages/Login"
import { ThemeProvider } from "@/components/theme/Theme-provider"
import Question from "@/components/question/Question"
import Navbar from "@/components/shared/Navbar"

const Router = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
      <Navbar />
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/preguntas' element={<Question/>} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router