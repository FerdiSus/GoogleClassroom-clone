import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kalender from './pages/calender.jsx'
import DaftarTgs from './pages/Daftar_tgs.jsx'
import Mapel from './pages/Mapel.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/kalender' element={<Kalender/>}/>
      <Route path='/daftar-tugas' element={<DaftarTgs/>}/>
      <Route path='/u/:Mapel' element={<Mapel/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
