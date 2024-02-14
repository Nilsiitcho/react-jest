import {fetchActualUSDtoBRLValue} from './dataFetcher';
import { convertUSDtoBRL } from './currencyService';

//O modulo dataFetcher se torna um mock
jest.mock('./dataFetcher');

describe('convert dolars to reais', () => {

    //Configura o Mock antes de cada execução para que o valor do dolar seja sempre 5 reais
    beforeEach(() => {
        fetchActualUSDtoBRLValue.mockResolvedValue(5);
    });

    // Garate que a função retorne 50 reais ao informar 5 dólares
    it('converts 10 dolars to 50 reais', async () => {
        const result = await convertUSDtoBRL(10);
        expect(result).toBe(50);
    });

    // Garate que a função retorne 100 reais ao informar 20 dólares
    it('converts 20 dolars to 100 reais', async () => {
        const result = await convertUSDtoBRL(20);
        expect(result).toBe(100);
    });

    // Garate que a função fetchActualUSDtoBRLValue foi chamada 1x
    it('calls fetchActualDollarValue once', async () => {
        await convertUSDtoBRL(10);
        expect(fetchActualUSDtoBRLValue).toHaveBeenCalledTimes(1);
    });

    // Garate que a função fetchActualUSDtoBRLValue foi chamada sem nenhum argumento
    it('calls fetchActualDollarValue with correct parameters', async () => {
        await convertUSDtoBRL(10);
        expect(fetchActualUSDtoBRLValue).toHaveBeenCalledWith();
    });

});
