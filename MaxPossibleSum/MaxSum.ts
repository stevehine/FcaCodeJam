import "../Utils/ArrayExtensions";

export class MaxSum {
    private _maxScore: number;
    constructor(data: string[]) {
        this._maxScore = data.reverse().map(line =>
            line.split(" ").map(val => parseInt(val))
        ).reduce((prev, cur) =>
            prev.pairwise()
                .map(pair => Math.max(pair.first, pair.second))
                .zip(cur, (a, b) => { return a + b; })
        ).first();
    }

    public get Score(): number {
        return this._maxScore;
    }
}