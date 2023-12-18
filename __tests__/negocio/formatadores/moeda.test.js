import { formataBrasileiroParaDecimal, formataDecimalParaReal } from "../../../src/negocio/formatadores/moeda";

describe("/negocio/formatadores/moeda", () => {
    describe("formata brasileiro para decimal", () => {
        
        it("deve retornar 8.59 quanto o valor for '8,59'", () => {
            const resultado = formataBrasileiroParaDecimal('8,59');
            expect(resultado).toBe(8.59);
        })
    })

    describe("formata decimal para real", () => {
        it("deve retornar R$8,59 quando o valor for 8.59", () => {
            const resultado = formataDecimalParaReal(8.59);
            expect(resultado).toMatch(/R\$\s8,59/);

        })
    })
})