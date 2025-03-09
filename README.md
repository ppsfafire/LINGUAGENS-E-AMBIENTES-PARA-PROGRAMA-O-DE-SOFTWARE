# LINGUAGENS-E-AMBIENTES-PARA-PROGRAMA-O-DE-SOFTWARE

# Sistema de Cadastro de Produtos para Loja de Eletrônicos

Este projeto consiste em um sistema de cadastro de produtos para uma loja de eletrônicos, desenvolvido em TypeScript, com o objetivo de demonstrar os conceitos de orientação a objetos aprendidos no curso de LINGUAGENS E AMBIENTES PARA PROGRAMAÇÃO DE SOFTWARE vinculado à Pós-graduação em Engenharia de Software da turma 2024-1 da instituição Centro Universitário Frassinetti do Recife - UNIFAFIRE.

## Professor

* \Kelven Leone

## Autor

* \Petrônio Silva - \https://github.com/ppsfafire/LINGUAGENS-E-AMBIENTES-PARA-PROGRAMA-O-DE-SOFTWARE

## Funcionalidades

* Cadastro de diferentes tipos de produtos (smartphones, notebooks, televisores, etc.).
* Implementação de classes para representar os produtos e suas características específicas.
* Utilização de encapsulamento, herança e polimorfismo.
* Exibição das informações detalhadas de cada produto.

## Como Executar

1.  **Pré-requisitos:**
    * Node.js e NPM instalados.
2.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITÓRIO]
    ```
3.  **Navegue até o diretório do projeto:**
    ```bash
    cd [nome_do_repositório]
    ```
4.  **Instale as dependências:**
    ```bash
    npm install
    ```
5.  **Compile o TypeScript:**
    ```bash
    npm run build
    ```
6.  **Execute a aplicação:**
    ```bash
    npm run start
    ```
7.  **Verifique a saída no console.**

## Estrutura do Projeto

loja-eletronicos/
├── src/
│   ├── produto.ts
│   ├── smartphone.ts
│   ├── notebook.ts
│   ├── televisor.ts
│   ├── index.ts
├── package.json
├── tsconfig.json
└── README.md

## Conceitos de Orientação a Objetos Demonstrados

* **Classes:** Representação de entidades do mundo real (produtos).
* **Encapsulamento:** Utilização de modificadores de acesso (private) e getters/setters.
* **Herança:** Criação de subclasses que herdam características da classe base (Produto).
* **Polimorfismo:** Sobrescrita do método `exibirDetalhes()` nas subclasses.

## Observações

* Este projeto foi desenvolvido como parte de um exercício para avaliar os conceitos aprendidos sobre classes e orientação a objetos em JavaScript/TypeScript.
* Sinta-se à vontade para explorar e modificar o código.
