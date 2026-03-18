
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Services from "./route/Services";
import Gallery from "./route/Gallery";
import Reviews from "./route/Reviews";
import Contact from "./route/Contact";
import Home from "./route/Home";
import ScrollToTop from "./component/ScrollToTop.jsx";

function App() {
  return (
    <>
      <Navbar />
       <ScrollToTop />  
      <main className='content'>
      <Routes>
      <Route path= "/" element= {<Home/>}/>
      <Route path= "/services" element={<Services />} />
      <Route path= "/contact" element={<Contact />} />
      <Route path= "/reviews" element={<Reviews />} />
      <Route path= "/gallery" element={<Gallery />} />
      </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
