import { FlashingOctopus, FlashingThing } from "./FlashingOctupus";

describe("Some tests about flashing octopi", () => {
    test("A simple test", () => {
        const flashingOctopus = new FlashingThing(["11111", "19991", "19191", "19991", "11111"]);
        for (let i = 0; i < 3; i++) {
            flashingOctopus.computeRound();
        }
        expect(flashingOctopus.TotalFlashes).toBe(9);
    });

    test("Example case Part 1", () => {
        const flashingOctopus = new FlashingOctopus(["5483143223",
            "2745854711",
            "5264556173",
            "6141336146",
            "6357385478",
            "4167524645",
            "2176841721",
            "6882881134",
            "4846848554",
            "5283751526"]);
        for (let i = 0; i < 100; i++) {
            flashingOctopus.computeRound();
        }
        expect(flashingOctopus.TotalFlashes).toBe(1656);
    })

    test("Example case Part 2", () => {
        const flashingOctopus = new FlashingOctopus(["5483143223",
            "2745854711",
            "5264556173",
            "6141336146",
            "6357385478",
            "4167524645",
            "2176841721",
            "6882881134",
            "4846848554",
            "5283751526"]);
        let rounds = 0;
        do {
            flashingOctopus.computeRound();
            rounds++;
        } while (flashingOctopus.FlashesInRound !== 100 )
        expect(rounds).toBe(195);
    })
})