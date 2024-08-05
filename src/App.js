import React from 'react'
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Footer from './componets/Footer';
import './styles/Global.scss'

const App = () => {
  return (
        <div>
            <Navbar />
            <Home/>
            <Footer/>
         </div>
  )
}

export default App