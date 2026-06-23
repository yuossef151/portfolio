import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio"> 
      <Routes>
        <Route path="/" element={<App />} />
        {/* يمكنك إضافة مسارات أخرى هنا إذا أردت فصل المشاريع */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);