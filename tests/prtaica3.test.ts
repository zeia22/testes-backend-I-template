import{pratica3} from '../src/pratica3'

describe("testando pratica3", () =>{
    test("deve retornar um objeto contendo propriedades soma e multiplicação ", () =>{
        const result = pratica3(3, 5)
        expect(result).toEqual({soma: 8, multiplicacao:15})
        
    })
})