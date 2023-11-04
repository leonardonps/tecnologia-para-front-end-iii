import React from 'react'
import './FormularioDeContato.css'

const FormularioDeContato = () => {

    let pessoaInformacoes = {
        "nome": "",
        "contato": "",
        "mensagem": ""
    }

    const handleNome = (e) => {
        pessoaInformacoes.nome = e.target.value;
    }

    const handleContato= (e) => {
        pessoaInformacoes.contato = e.target.value;
    }    

    const handleMensagem = (e) => {
        pessoaInformacoes.mensagem = e.target.value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let jsonToSend = JSON.stringify(pessoaInformacoes);
        console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
    }

    return (
        <div>
            <h1>Formulário de Contato:</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" onChange={handleNome}/>
                </div>
                <div>
                    <label htmlFor="contato">Contato:</label>
                    <input type="tel" id="contato" onChange={handleContato}/>
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea type="text" id="mensagem" onChange={handleMensagem}></textarea>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormularioDeContato