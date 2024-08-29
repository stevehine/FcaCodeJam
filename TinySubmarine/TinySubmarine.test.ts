import { TinySubmarine } from "./TinySubmarine";

describe("Some tests about caves", () => {
    test("A simple test", () => {
        const tinySub = new TinySubmarine(["start-A",
            "start-b",
            "A-c",
            "A-b",
            "b-d",
            "A-end",
            "b-end"]);
        expect(tinySub.calculateRoutes()).toBe(10);
    });

    test("The real deal", () => {
        const tinySub = new TinySubmarine(["by-TW",
            "start-TW",
            "fw-end",
            "QZ-end",
            "JH-by",
            "ka-start",
            "ka-by",
            "end-JH",
            "QZ-cv",
            "vg-TI",
            "by-fw",
            "QZ-by",
            "JH-ka",
            "JH-vg",
            "vg-fw",
            "TW-cv",
            "QZ-vg",
            "ka-TW",
            "ka-QZ",
            "JH-fw",
            "vg-hu",
            "cv-start",
            "by-cv",
            "ka-cv"]);
        expect(tinySub.calculateRoutes()).toBe(4495);
    })
});
