import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about'; 
import Contact from './pages/contact'; 
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