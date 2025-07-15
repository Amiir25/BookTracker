import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddBook from './components/AddBook';
import Footer from './components/Footer';
import Update from './pages/Update';

const App = () => {
  return (
    <>
      <div className='relative px-6 md:px-12 lg:px-24 xl:px-32'>
        
        {/* Navbar */}
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>

        {/* Footer */}
        <Footer/>
      </div>
    </>
  )
}

export default App
