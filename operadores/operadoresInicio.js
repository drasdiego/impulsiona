// Operadores Aritméticos 

let numero1 = 10;
let numero2 = 20;

// Adição ou soma
console.log(numero1 + numero2); // Saída: 30

// Subtração
console.log(numero1 - numero2); // Saída: -10

// Divisão
console.log(numero1 / numero2); // Saída: 0.5

// Multiplicação
console.log(numero1 * numero2); // Saída: 200

// Resto ou Módulo
console.log(8 % 4); // Saída: 0

// Exponenciação
console.log(5 ** 5); // Saída: 3125

// Calcular a raiz quadrada de um número
let numero = 16;
let raizQuadrada = Math.sqrt(numero);
console.log(raizQuadrada); // Saída: 4

// Operadores Unários 

let numero3 = 1; 
console.log(numero3); // Saída: 1

numero3++; // Incrementa o valor de numero3 em 1
console.log(numero3); // Saída: 2

// Incremento prefixado
console.log(++numero3); // Saída: 3
// ++numero3 incrementa e mostra o valor antes da expressão ser avaliada. 

// Após incrementar numero3 novamente
numero3++; // Incrementa o valor de numero3 em mais 1
console.log(numero3); // Saída: 4

// Decremento Unário

let decremento = 10;
console.log(decremento); // Saída: 10

decremento--; // Decrementa o valor de decremento em 1
console.log(decremento); // Saída: 9

// Decremento múltiplo
decremento--; // Decrementa o valor de decremento em mais 1
decremento--; // Decrementa o valor de decremento em mais 1
decremento--; // Decrementa o valor de decremento em mais 1
decremento--; // Decrementa o valor de decremento em mais 1
decremento--; // Decrementa o valor de decremento em mais 1
console.log(decremento); // Saída: 5
// Decremento múltiplo: decrementa o valor 5 vezes, resultando em 5

// Uso combinado de prefixado e pós-fixado
console.log(--decremento); // Saída: 4
// --decremento decrementa o valor antes de exibir, então o valor exibido é 4

console.log(decremento--); // Saída: 4
// decremento-- exibe o valor antes de decrementar, então o valor exibido é 4, depois decrementa para 3

console.log(decremento); // Saída: 3
// Exibe o valor final após o decremento pós-fixado, que é 3

// Comparando igualdade
let nomeArmazenado = "Ines";
let nomeDigitado = "Gabriel";

console.log(nomeArmazenado == nomeDigitado); // Saída: false
// == compara se os valores são iguais. Neste caso, "Ines" é diferente de "Gabriel", então o resultado é false

// Outras comparações
console.log(nomeArmazenado != nomeDigitado); // Saída: true
// != compara se os valores são diferentes. Como "Ines" é diferente de "Gabriel", o resultado é true

console.log(nomeArmazenado > nomeDigitado); // Saída: false
// > compara se o valor da esquerda é maior que o da direita. Comparando strings, "Ines" não é maior que "Gabriel"

console.log(nomeArmazenado < nomeDigitado); // Saída: true
// < compara se o valor da esquerda é menor que o da direita. Comparando strings, "Ines" é menor que "Gabriel"

let numeroMaior = 10;
let numeroMenor = 5; 

console.log(numeroMaior > numeroMenor); // Saída: true
// > compara se o valor da esquerda é maior que o da direita. Aqui, 10 é maior que 5, então o resultado é true

console.log(numeroMaior < numeroMenor); // Saída: false
// < compara se o valor da esquerda é menor que o da direita. Aqui, 10 não é menor que 5, então o resultado é false

// Comparação após atualização de numeroMenor
numeroMenor = 50; 

console.log(numeroMaior < numeroMenor); // Saída: true
// < compara se o valor da esquerda é menor que o da direita. Aqui, 10 é menor que 50, então o resultado é true

console.log(numeroMaior > numeroMenor); // Saída: false
// > compara se o valor da esquerda é maior que o da direita. Aqui, 10 não é maior que 50, então o resultado é false

let resultadoComparacao = numeroMaior > numeroMenor; 

console.log(resultadoComparacao); // Saída: false
// Armazena o resultado da comparação em resultadoComparacao e exibe. Aqui, 10 não é maior que 50, então o resultado é false

console.log(numeroMaior > numeroMenor); // Saída: false
// Reexibe o resultado da comparação diretamente. Aqui, 10 não é maior que 50, então o resultado é false

// Exemplo de operação adicional
let numero4 = 15;
let numero5 = 25;
console.log(numero4 + numero5); // Saída: 40

//Fim de exemplos