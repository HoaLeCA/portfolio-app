import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';

import Layout from './components/Layout';
import Contact from './components/contact/Contact';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/mern-stack-blog-part-1' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route index element={<Banner />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
