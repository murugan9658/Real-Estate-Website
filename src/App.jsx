import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Mortgage from './pages/Mortgage'
import Footer from './components/Footer'
import SouthIndiaMap from './pages/Map'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Property from './pages/Property'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollTop'



function App() {
  

  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/mortgage' element={<Mortgage/>} />
        <Route  path='/map' element={<SouthIndiaMap/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/property' element={<Property/>} />
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
