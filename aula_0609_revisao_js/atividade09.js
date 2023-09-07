// Atividade de POO - Revisão JS

class Pessoa {
    nome;
    idade; 
    profissao;

    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nProfissao: ${this.profissao}`);
    }
}

let pessoa1 = new Pessoa("João", 40, "Encanador");

pessoa1.exibirInfo();