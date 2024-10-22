import { OppositesAttract } from "./OppositesAttract";

describe("Some tests about elements that do pop", () => {

    test("A string of opposites in order should reduce to 0", () => {
        const attractor = new OppositesAttract(["AaBbCc"]);
        expect(attractor.Size).toBe(0);
    });

    test("A string of unique elements should not reduce", () => {
        const attractor = new OppositesAttract(["AbCdEf"]);
        expect(attractor.Size).toBe(6);
    })
});