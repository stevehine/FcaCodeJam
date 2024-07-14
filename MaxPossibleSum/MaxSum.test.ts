import assert from "assert";
import { MaxSum } from "./MaxSum";

const simpleTriangle = ["1", "2 3"];
const mediumTriangle = ["3", "7 4", "2 4 6", "8 5 9 3"];

describe("Some tests about triangles", () => {
    test("A simple triangle should have a max of 4", () => {
        const maxSum = new MaxSum(simpleTriangle);
        assert.equal(maxSum.Score, 4);
    });

    test("a medium triangle should have a max of 23", () => {
        const maxSum = new MaxSum(mediumTriangle);
        assert.equal(maxSum.Score, 23);
    });
});