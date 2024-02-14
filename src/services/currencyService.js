import {fetchActualUSDtoBRLValue} from "./dataFetcher";

// Chama função para pegar o valor atual do dólar em reais e realiza o cálculo de conversão
export async function convertUSDtoBRL(value) {
    const brlValue = await fetchActualUSDtoBRLValue();
    return value * brlValue;
}