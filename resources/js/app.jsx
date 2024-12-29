import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Layout from './Layout';

function App() {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} /> 
          <Route path="contact" element={<Contact />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);