export class WordDistance {
    private distance: number = 0;
    constructor(first: string, second: string) {
        const firstLetters = first.split('');
        const secondLetters = second.split('');

        const scoreArray: number[][] = [];

        scoreArray[0] = [0];

        let currentDistance = 0;

        firstLetters.forEach((f, i) => {
            scoreArray[0][i + 1] = i + 1;
        });

        secondLetters.forEach((s, i) => {
            scoreArray[i + 1] = [i + 1];
            firstLetters.forEach((f, j) => {
                currentDistance = Math.min(scoreArray[i][j], scoreArray[i + 1][j], scoreArray[i][j + 1]) + (s === f ? 0 : 1);
                scoreArray[i + 1][j + 1] = currentDistance;
            });
        });

        this.distance = currentDistance;
    }
    public get Distance() {
        return this.distance;
    }
}