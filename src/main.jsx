import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import "./App.css"


import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kalender from './pages/calender.jsx'
import DaftarTgs from './pages/Daftar_tgs.jsx'
import Mapel from './pages/Mapel.jsx'
import TidakAda from './pages/Tidak_ada.jsx'
import SelesaiTgs from './pages/selesai.jsx'
import Coba from './pages/coba-kalender.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/kalender' element={<Kalender/>}/>
      <Route path='/daftar-tugas' element={<DaftarTgs/>}/>
      <Route path='/u/:Mapel' element={<Mapel/>}/>
      <Route path='/daftar-tugas' element={<DaftarTgs/>}/>
      <Route path='/not-allowed' element={<TidakAda/>}/>
      <Route path='/done' element={<SelesaiTgs/>}/>
      <Route path='/coba' element={<Coba/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
