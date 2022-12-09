import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/home';
import NotFound from '../NotFound';
import WorkInProgress from '../WorkInProgress';
import Footer from '../Footer';
import Header from '../Header';
import Recruitment from '../Recruitment';
import Progress from '../Progress';
import About from '../About';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path='/progress' element={<Progress  />} />
        <Route path='/about' element={<About  />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
