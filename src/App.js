import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';

import Layout from './components/Layout';

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/mern-stack-blog' element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
