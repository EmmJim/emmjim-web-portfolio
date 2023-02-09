import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='app'>
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
        
    </div>
  )
}

export default App