export class FlashingOctopus {
    numberGrid: number[][];
    public TotalFlashes = 0;
    public FlashesInRound = 0;
    size: { x: number, y: number };

    constructor(grid: string[]) {
        this.numberGrid = grid.map(
            line => line.split('').map(num => parseInt(num))
        );
        this.size = { x: grid[0].length, y: grid.length };
    }

    computeRound() {
        this.FlashesInRound = 0;
        const adds: { x: number, y: number }[] = [];
        for (let x = 0; x < this.size.x; x++) {
            for (let y = 0; y < this.size.y; y++) {
                adds.push({ x, y });
            }
        }

        while (adds.length > 0) {
            const coord = adds.pop();
            this.numberGrid[coord!.y][coord!.x] += 1;
            if (this.numberGrid[coord!.y][coord!.x] === 10) {
                this.FlashesInRound += 1;
                adds.push(...this.generateNewTargets(coord!));
            }
        }

        this.numberGrid = this.numberGrid.map(line => line.map(cell => cell > 9 ? 0 : cell));
        this.TotalFlashes += this.FlashesInRound;
    }
    generateNewTargets(coord: { x: number, y: number }): { x: number, y: number }[] {
        return [
            { x: coord.x, y: coord.y - 1 },
            { x: coord.x, y: coord.y + 1 },
            { x: coord.x - 1, y: coord.y - 1 },
            { x: coord.x - 1, y: coord.y },
            { x: coord.x - 1, y: coord.y + 1 },
            { x: coord.x + 1, y: coord.y - 1 },
            { x: coord.x + 1, y: coord.y },
            { x: coord.x + 1, y: coord.y + 1 },
        ].filter(cell => cell.x >= 0 && cell.y >= 0 && cell.x < this.size.x && cell.y < this.size.y);
    }
}


