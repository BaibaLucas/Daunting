import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import WorkInProgress from '../WorkInProgress';
import Footer from '../Footer';
import Header from '../Header';
import Recruitment from '../Recruitment';

const appHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

window.addEventListener('resize', appHeight);
appHeight();

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/recruitment' element={<Recruitment />} />
        <Route path='/progress' element={<WorkInProgress  />} />
        <Route path='/about' element={<WorkInProgress  />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
