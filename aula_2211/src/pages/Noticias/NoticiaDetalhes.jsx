import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NoticiaDetalhes = () => {
  
    const { id } = useParams();

    const url = `http://localhost:3000/noticias/${id}`;

    const [noticiaDetalhes, setNoticiaDetalhes] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setNoticiaDetalhes(data); 
        }
        fetchData();
    }, [])

    return (
        <>
            <h3>{noticiaDetalhes.titulo}</h3>
            <h4>{noticiaDetalhes.subtitulo}</h4>
            <p>{noticiaDetalhes.textoNoticia}</p>
        </>
    )
}

export default NoticiaDetalhes