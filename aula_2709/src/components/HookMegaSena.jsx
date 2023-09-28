import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [numeroSorteado, setNumeroSorteado] = useState(0);
    
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    return (
        <div>
            <h1>Sorteador da Mega em React! :)</h1>
            <button onClick={() => {

                if(numerosSorteados.length > 5) {
                    alert("Já temos 6 números sorteados");
                } else {
                    let numero = Math.floor(Math.random() * (60 - 1 ) + 1);

                    let isRepetido = false;

                    for(let i = 0; i < numerosSorteados.length; i++){
                        if(numero === numerosSorteados[i]){
                            isRepetido = true;
                        }
                    }

                    if(isRepetido === false) {
                        setNumeroSorteado(numero);
                        setNumerosSorteados([...numerosSorteados, numero]);
                    }
                }

                
            }}>Sortear Número</button>
            <h2>Último Número sorteado: { numeroSorteado }</h2>  
            <h2>Números sorteados: { numerosSorteados.join(" - ")
            }</h2>

        </div>
    )


}

export default HookMegaSena