import { obtemLeilao, obtemLeiloes } from "../../src/repositorio/leilao";
import apiLeiloes from '../../src/servicos/apiLeiloes';

jest.mock("../../src/servicos/apiLeiloes");

const leiloesMock = [
    {
        "id": 3,
        "nome": "Fogão",
        "descricao": "Fogão 6 bocas",
        "valorInicial": 800,
        "icone": "fire",
        "cor": "#f16165"
      }
]

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200)
    })

}

const mockRequisicaoErro = () => {
    return new Promise((_,reject)=>{
        setTimeout(() => {
            reject();
        },200)
    })
}

describe("repositorio/leilao", () => {

    beforeEach(() => {
        apiLeiloes.get.mockClear();
    })

    describe("obtem leilão", () => {
        it("deve retornar uma lista de leilões", async() => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(leiloesMock))
            const leiloes = await obtemLeiloes();
            expect(leiloes).toEqual(leiloesMock)
        })
        it("deve retornar uma lista de vazia quando houver erro", async() => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro())
            const leiloes = await obtemLeiloes();
            expect(leiloes).toEqual([]);
        })

        it("deve chamar o método apenas uma vez e para o recurso /leiloes", async() => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(leiloesMock))
            const leiloes = await obtemLeiloes();
            expect(apiLeiloes.get).toBeCalledWith('/leiloes');
            expect(apiLeiloes.get).toBeCalledTimes(1);
        })
    })
})

