
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./component/Services";
import Gallery from "./component/Gallery";
import Reviews from "./component/Reviews";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/services" element={<Services />} />
      <Route path= "/contact" element={<Contact />} />
      <Route path= "/reviews" element={<Reviews />} />
      <Route path= "/gallery" element={<Gallery />} />
      <Route path= "/contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
