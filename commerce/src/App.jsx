import { Link, Route, Routes } from "react-router-dom";
import Home from "./componentas/Home.jsx";
import Navbar from "./componentas/Navbar.jsx";
import Products from "./componentas/Products";

function App() {
  return (
    <>
      <div className="w-full h-screen flex">

        {/* Uncomment these links if you want to add navigation */}
        {/* <Link to="/" className="p-2">Home</Link>
        <Link to="/products/1" className="p-2">Products</Link> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
