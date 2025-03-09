// src/produto.ts
export class Produto {
  private nome: string;
  private marca: string;
  private modelo: string;
  private preco: number;
  private estoque: number;

  constructor(nome: string, marca: string, modelo: string, preco: number, estoque: number) {
    this.nome = nome;
    this.marca = marca;
    this.modelo = modelo;
    this.preco = preco;
    this.estoque = estoque;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getMarca(): string {
    return this.marca;
  }

  public setMarca(marca: string): void {
    this.marca = marca;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }

  public getEstoque(): number {
    return this.estoque;
  }

  public setEstoque(estoque: number): void {
    this.estoque = estoque;
  }

  public exibirDetalhes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Estoque: ${this.estoque} unidades`);
  }
}