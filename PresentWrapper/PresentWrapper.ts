export class PresentWrapper {
    private _area: number;
    private _length: number;
    constructor(data: string[]) {
        this._area = data.map(box => extractDimensions(box)).map(dimensions => calculateSides(dimensions)).map(sides => calculateArea(sides)).reduce((p, c) => p + c, 0);
        this._length = data.map(box => extractDimensions(box)).map(dimensions => calculateLength(dimensions)).reduce((p, c) => p + c, 0);
    }
    public get Area(): number { return this._area };
    public get Length(): number { return this._length };

}

function extractDimensions(box: string): { l: number, w: number, h: number } {
    const parts = box.split('x').map(value => parseInt(value))
    return { l: parts[0], w: parts[1], h: parts[2] };
}
function calculateSides(dimensions: { l: number; w: number; h: number; }): { lw: number, lh: number, hw: number } {
    const { l, w, h } = dimensions;
    return { lw: l * w, lh: l * h, hw: h * w };
}

function calculateArea(sides: { lw: number; lh: number; hw: number; }): number {
    const { lw, lh, hw } = sides;
    return 2 * lw + 2 * lh + 2 * hw + Math.min(lw, lh, hw);
}

function calculateLength(dimensions: { l: number; w: number; h: number; }): number {
    const { l, w, h } = dimensions;

    const sorted = [l, w, h].sort((a, b) => a < b ? -1 : 1);
    sorted.pop();
    return l * w * h + sorted.reduce((p, c) => c + c + p, 0);
}

