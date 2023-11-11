import { BrowserRouter, Routes, Route } from "react-router-dom"
/* pages */
import Home from './pages/home.jsx'
import Food from "./pages/food.js"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
