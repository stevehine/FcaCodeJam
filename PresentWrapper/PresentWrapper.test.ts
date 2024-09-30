import { PresentWrapper } from "./PresentWrapper";

describe("Some tests about present wrapping", () => {

    test("A 2x3x4 present should require 58 units", () => {
        const wrapper = new PresentWrapper(["2x3x4"]);
        expect(wrapper.Area).toBe(58);
        expect(wrapper.Length).toBe(34);
    });

    test("A 2x3x4 present should require 58 units", () => {
        const wrapper = new PresentWrapper(["1x1x10"]);
        expect(wrapper.Area).toBe(43);
        expect(wrapper.Length).toBe(14);
    });

    test("A 2x3x4 and a 1x1x10 present should require 101 units", () => {
        const wrapper = new PresentWrapper(["2x3x4", "1x1x10"]);
        expect(wrapper.Area).toBe(101);
        expect(wrapper.Length).toBe(48);
    });


});