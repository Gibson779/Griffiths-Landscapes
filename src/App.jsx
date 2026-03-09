
import './App.css'

function App() {

  return (
    <>

    <Navbar>
      <Route path = "/" elements = {<Home/>}/>
      <Route path = "Home" elements = {<Home/>}/>
      <Route path = "Services" elements = {<Services/>}/>
      <Route path = "Gallery" elements = {<Gallery/>}/>
      <Route path = "About" elements = {<About/>}/>
      <Route path = "Reviews" elements = {<Reviews/>}/>
      <Route path = "Contact" elements = {<Contact/>}/>
    </Navbar>
     
    </>
  )
}

export default App
