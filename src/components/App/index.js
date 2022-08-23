import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Footer from '../Footer';
// import Recruitment from '../Recruitment';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        {/* <Route path='/recruitment' element={<Recruitment />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
