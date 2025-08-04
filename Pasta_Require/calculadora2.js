import PromptSync from 'prompt-sync';
import { soma, subtração, multiplicação, divisão} from "./matemágica.js";


const prompt = PromptSync({sigint: true});
var resultado;

console.log("======== CALCULADORA MODULARIZADA ========")
const mensagem = (console.log("-------------- 1 - ADIÇÃO ---------------\n------------- 2 - SUBTRAÇÃO -------------\n----------- 3 - MULTIPLICAÇÃO -----------\n-------------- 4 - DIVISÃO --------------\n------------- 5 - PARA SAIR -------------\n=========================================="))

let n1 = prompt('Digite o primeiro número: ');
n1 = parseFloat(n1);
let n2 = prompt('Digite o segundo número: ');
n2 = parseFloat(n2);
mensagem;
let op = prompt("Qual a operação desejada: ");
switch(op){
    case '1':
        resultado = soma(n1, n2);
        break;
    case '2':
        resultado = subtração(n1, n2);
        break;
    case '3':
        resultado = multiplicação(n1, n2);
        break;
    case '4':
        resultado = divisão(n1, n2);
        break;
    case '5':
        console.log('Saindo...');
        process.exit();
    default:
        console.log("Escolha um operador válido.");
}
console.log(`Resultado: ${resultado}`)
