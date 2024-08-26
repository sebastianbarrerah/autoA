import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "@/pages/Login"
import { ThemeProvider } from "@/components/theme/Theme-provider"
import Question from "@/components/question/Question"
import RegisterPage from "@/pages/Register"

const Router = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
          <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/' element={<Login/>} />
              <Route path='/preguntas' element={<Question/>} />
              <Route path='/registro' element={<RegisterPage/>} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router