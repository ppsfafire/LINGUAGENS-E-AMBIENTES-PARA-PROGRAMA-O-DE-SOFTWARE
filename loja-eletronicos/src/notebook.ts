// src/notebook.ts
import { Produto } from './produto';

export class Notebook extends Produto {
  private processador: string;
  private memoriaRAM: number;

  constructor(nome: string, marca: string, modelo: string, preco: number, estoque: number, processador: string, memoriaRAM: number) {
    super(nome, marca, modelo, preco, estoque);
    this.processador = processador;
    this.memoriaRAM = memoriaRAM;
  }

  public getProcessador(): string {
    return this.processador;
  }

  public setProcessador(processador: string): void {
    this.processador = processador;
  }

  public getMemoriaRAM(): number {
    return this.memoriaRAM;
  }

  public setMemoriaRAM(memoriaRAM: number): void {
    this.memoriaRAM = memoriaRAM;
  }

  public exibirDetalhes(): void {
    super.exibirDetalhes();
    console.log(`Processador: ${this.processador}`);
    console.log(`Memória RAM: ${this.memoriaRAM} GB`);
  }
}