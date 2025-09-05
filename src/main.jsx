import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Timeline from './sites/Timeline.jsx'
import Rok2024 from './sites/2024.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/harmonogram' element={<Timeline/>} />
        <Route path='/2024' element={<Rok2024/>} />
      </Routes>
     </BrowserRouter>
  </StrictMode>,
)
