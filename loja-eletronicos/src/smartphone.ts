// src/smartphone.ts
import { Produto } from './produto';

export class Smartphone extends Produto {
  private tamanhoTela: number;
  private sistemaOperacional: string;

  constructor(nome: string, marca: string, modelo: string, preco: number, estoque: number, tamanhoTela: number, sistemaOperacional: string) {
    super(nome, marca, modelo, preco, estoque);
    this.tamanhoTela = tamanhoTela;
    this.sistemaOperacional = sistemaOperacional;
  }

  public getTamanhoTela(): number {
    return this.tamanhoTela;
  }

  public setTamanhoTela(tamanhoTela: number): void {
    this.tamanhoTela = tamanhoTela;
  }

  public getSistemaOperacional(): string {
    return this.sistemaOperacional;
  }

  public setSistemaOperacional(sistemaOperacional: string): void {
    this.sistemaOperacional = sistemaOperacional;
  }

  public exibirDetalhes(): void {
    super.exibirDetalhes();
    console.log(`Tamanho da Tela: ${this.tamanhoTela} polegadas`);
    console.log(`Sistema Operacional: ${this.sistemaOperacional}`);
  }
}