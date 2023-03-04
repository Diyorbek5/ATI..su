import React from 'react';
import Footer from './components/Footer';
import Header  from './components/Header';
import MobileApp from './components/MobileApp';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
  return (
    <div>
    <Navbar/>
      <Header />
      <Services/>
      <MobileApp />
      <Footer />
    </div>
  )
}

export default App
