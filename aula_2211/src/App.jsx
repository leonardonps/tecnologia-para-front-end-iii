import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Faculdade from './pages/institucional/Faculdade'
import DpoLgpd from './pages/institucional/DpoLgpd'
import Noticias from './pages/Noticias/Noticias'
import Navbar from './components/navbar/Navbar'
import NoticiaDetalhes from './pages/Noticias/NoticiaDetalhes'

function App() {

  return (
    <>
    <BrowserRouter>
    <h1>UNIESP - Centro Universitário</h1>
    <Navbar />
    <Routes>
      <Route path="/institucional/a-faculdade" element={<Faculdade />} />
      <Route path="/institucional/dpo-lgpd" element={<DpoLgpd />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/noticias/noticia-detalhe/:id" element={<NoticiaDetalhes />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
