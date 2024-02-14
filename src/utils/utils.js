/**
 * Retorna a soma de dois números informados
 */
export function add(a, b) {
    return a + b;
}


/**
 * Altera a primeira letra do texto informado para maiúscula
 */
export function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Retorna se o número informado é par
 */
export function isEvenNumber(num) {
    return num % 2 === 0;
}