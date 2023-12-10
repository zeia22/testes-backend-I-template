import { fixacao } from './../src/fixacao';
describe("", ( ) => {
    test("deve retornar lista contendo cada letra de uma palavra", () =>{
        const result = fixacao("dev")

        expect(result).toEqual(["d","e","v"])
    })
})