import React from 'react'
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/estudantes"

const TabelaEstudantes = () => {
    const [estudantes, setEstudantes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            
            setEstudantes(data);
        }
        fetchData();
    }, []);

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        estudantes.map((e) => (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.nome}</td>
                                <td>{e.email}</td>
                                <td>{e.curso}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}



export default TabelaEstudantes