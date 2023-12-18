import { formataMaiorLanceDoLeilao, retornaMaior } from "../../../src/negocio/formatadores/lance";

describe('negocio/formatadores/lance', () =>{
    describe("formata maior lance do leilão", () => {
        it('deve retornar o maior valor', ()=>{
            const lance1 = {
                valor: 70.4
            };
            const lance2 = {
                valor: 150
            };
            const inicial = {
                valor: 30
            };
            const lances = [lance1, lance2, inicial];
            const maiorLance = formataMaiorLanceDoLeilao(lances, inicial);
            expect(maiorLance).toEqual(lance2);
            
        })
    })
})