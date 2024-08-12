import { WordDistance } from "./WordDistance";

describe("Some tests involving word distances", () => {
    test("two identical words should have a score of 0", () => {
        const example = new WordDistance("word", "word");
        expect(example.Distance).toBe(0);
    });
    test("two totally different words should have a score equal to their length", () => {
        const example = new WordDistance("abc", "xyz");
        expect(example.Distance).toBe(3);
    });
})