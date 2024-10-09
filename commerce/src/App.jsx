import { Link, Route, Routes } from "react-router-dom"
import Home from "./componentas/Home.jsx"
import Navbar from "./componentas/Navbar.jsx"
// import Navbar from "./componentas/Navbar"
import Products from "./componentas/Products.jsx"



function App() {

  return (
    <>
      <div className="w-full h-screen flex">

        {/* <Link to="/">Home</Link>
        <Link to="/products">Products</Link> */}

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
