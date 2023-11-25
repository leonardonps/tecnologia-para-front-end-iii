import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/noticias">Notícias</Link>
        <Link to="/institucional/a-faculdade">Sobre a faculdade</Link>
        <Link to="/institucional/dpo-lgpd">DPO - LGPD</Link>
    </nav>
  )
}

export default Navbar