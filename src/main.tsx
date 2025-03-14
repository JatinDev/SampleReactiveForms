import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form1Placeholder, Form2Placeholder } from './components'
import Header from './components/header/header.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form1" element={<Form1Placeholder />} />
        <Route path="/form2" element={<Form2Placeholder />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
