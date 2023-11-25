import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const url = 'http://localhost:3000/noticias';

const Noticias = () => {
  

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();

      setNoticias(data);
    }
    fetchData();
  }, []);


  return (
    noticias.map( n => (
      <>
        <h2><Link to={`/noticias/noticia-detalhe/${n.id}`}>{n.titulo}</Link></h2>
        <h3>{n.subtitulo}</h3>
      </>
    ))
  );
}

export default Noticias