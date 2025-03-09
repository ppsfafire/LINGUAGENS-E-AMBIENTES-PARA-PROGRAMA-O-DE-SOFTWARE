// src/televisor.ts
import { Produto } from './produto';

export class Televisor extends Produto {
  private tamanhoTela: number;
  private resolucao: string;

  constructor(nome: string, marca: string, modelo: string, preco: number, estoque: number, tamanhoTela: number, resolucao: string) {
    super(nome, marca, modelo, preco, estoque);
    this.tamanhoTela = tamanhoTela;
    this.resolucao = resolucao;
  }

  public getTamanhoTela(): number {
    return this.tamanhoTela;
  }

  public setTamanhoTela(tamanhoTela: number): void {
    this.tamanhoTela = tamanhoTela;
  }

  public getResolucao(): string {
    return this.resolucao;
  }

  public setResolucao(resolucao: string): void {
    this.resolucao = resolucao;
  }

  public exibirDetalhes(): void {
    super.exibirDetalhes();
    console.log(`Tamanho da Tela: ${this.tamanhoTela} polegadas`);
    console.log(`Resolução: ${this.resolucao}`);
  }
}