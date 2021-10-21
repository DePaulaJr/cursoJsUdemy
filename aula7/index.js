//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número 
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não podemos redeclarar constantes
//NÂO UTILIZAR VAR; Utilize CONST
const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(typeof(primeiroNumero + segundoNumero));