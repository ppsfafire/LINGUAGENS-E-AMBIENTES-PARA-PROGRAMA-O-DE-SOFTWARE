// src/index.ts
import { Smartphone } from './smartphone';
import { Notebook } from './notebook';
import { Televisor } from './televisor';

const smartphone = new Smartphone('iPhone 13', 'Apple', 'A2633', 5999.99, 10, 6.1, 'iOS 15');
const notebook = new Notebook('Inspiron 15', 'Dell', 'i15-5510', 4499.99, 5, 'Intel Core i5', 8);
const televisor = new Televisor('Smart TV 55"', 'Samsung', 'UN55AU7000GXZD', 3299.99, 8, 55, '4K UHD');

console.log('--- Smartphone ---');
smartphone.exibirDetalhes();

console.log('\n--- Notebook ---');
notebook.exibirDetalhes();

console.log('\n--- Televisor ---');
televisor.exibirDetalhes();