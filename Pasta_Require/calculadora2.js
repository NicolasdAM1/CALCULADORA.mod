import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let n1 = prompt('Insira um número: ');
n1 = parseFloat(n1);
let n2 = prompt("Insira o segundo número: ")
n2 = parseFloat(n2)

import { soma } from "./index.js";

import { subtração } from "./index.js";