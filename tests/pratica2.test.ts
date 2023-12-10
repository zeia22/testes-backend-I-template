import { pratica2 } from './../src/pratica2';
describe("testando pratica2", () =>{
    test("deve retornar true se receber número inteiro par", () =>{
        const result1 = pratica2(10)
        const result2 = pratica2(16780)
        const result3 = pratica2(104)
        const result4 = pratica2(90)
        expect(result1). toBe(true)
        expect(result2).not.toBe(false)
        expect(result3). toBe(true)
        expect(result4). toBe(true)
    })
})
describe("testando pratica2", () =>{
    test("deve retornar false se receber número inteiro impar", () =>{
        const result1 = pratica2(11)
        const result2 = pratica2(16783)
        const result3 = pratica2(1045)
        const result4 = pratica2(909)
        expect(result1). toBe(false)
        expect(result2).not.toBe(true)
        expect(result3). toBe(false)
        expect(result4). toBe(false)
    })
    test("deve retornar null se receber parâmetro diferentes de number", () =>{
        const result= pratica2("2" as any)

        expect(result). toBeNull()
        expect(result).not.toBe(true)
        expect(result). toBe(null)
        expect(result). toEqual(null)
})




    })
