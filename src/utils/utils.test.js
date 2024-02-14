import {add, isEvenNumber, capitalizeString} from "./utils";

// Verifica se função capitalizeString retorna o texto com a primeira letra em maiúscula
test('capitalizeString capitalizes the first letter of a string', () => {
    expect(capitalizeString('hello')).toBe('Hello');
    expect(capitalizeString('world')).toBe('World');
});

// Verifica se função capitalizeString não faz alteração no texto quando a primeira letra já é maiúscula
test('capitalizeString does not change an already capitalized string', () => {
    expect(capitalizeString('Hello')).toBe('Hello');
});

// Verifica se função capitalizeString retorna uma String vazia ao chamar a função passando uma string vazia
test('capitalizeString returns an empty string if an empty string is passed', () => {
    expect(capitalizeString('')).toBe('');
});

// Verifica se função isEvenNumber retorna true ao informar números par
test('isEvenNumber returns true for even numbers', () => {
    expect(isEvenNumber(2)).toBe(true);
    expect(isEvenNumber(4)).toBe(true);
    expect(isEvenNumber(0)).toBe(true);
});

// Verifica se função isEvenNumber retorna false ao informar números ímpar
test('isEvenNumber returns false for odd numbers', () => {
    expect(isEvenNumber(1)).toBe(false);
    expect(isEvenNumber(3)).toBe(false);
    expect(isEvenNumber(5)).toBe(false);
});

// Verifica se função isEvenNumber retorna true para números par negativos
test('isEvenNumber returns true for negative even numbers', () => {
    expect(isEvenNumber(-2)).toBe(true);
    expect(isEvenNumber(-4)).toBe(true);
});

// Verifica se função isEvenNumber retorna false para números ímpar negativos
test('isEvenNumber returns false for negative odd numbers', () => {
    expect(isEvenNumber(-1)).toBe(false);
    expect(isEvenNumber(-3)).toBe(false);
});

// Verifica se função add está somando corretamente dois números
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

// Verifica se a função add também lida com números negativos
test('adds -1 + 2 to equal 1', () => {
    expect(add(-1, 2)).toBe(1);
});

// Verifica se a função add lida com números decimais
test('adds 1.5 + 2.5 to equal 4', () => {
    expect(add(1.5, 2.5)).toBe(4);
});

