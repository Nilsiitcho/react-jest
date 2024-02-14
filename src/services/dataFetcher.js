//Realiza chamada à api para pegar o valor do dolar em real
export async function fetchActualUSDtoBRLValue() {
    const response = await fetch('https://currencyvalue?from=USD&to=BRL');
    return await response.json();
}
