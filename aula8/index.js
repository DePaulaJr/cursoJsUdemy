/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.8 de altura e seu IMC é de 25.925925
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura*altura);
let anoNascimento = 2021 - 30;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);