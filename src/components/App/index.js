import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Footer from '../Footer';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
