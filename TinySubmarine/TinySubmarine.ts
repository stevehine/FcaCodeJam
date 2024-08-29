
export class TinySubmarine {

    private _caves: Map<string, string[]>;
    constructor(data: string[]) {
        this._caves = new Map<string, string[]>();
        data.map(line => line.split('-'))
            .map(parts => [{ l: parts[0], r: parts[1] }, { l: parts[1], r: parts[0] }])
            .flatMap(pairings => pairings)
            .forEach(pair => {
                const { l, r } = pair;
                if (this._caves.has(l)) {
                    this._caves.get(l)?.push(r);
                } else {
                    this._caves.set(l, [r]);
                }
            });
    }

    public calculateRoutes(): number {
        return this.calculateRoute(["start"], "end");
    }

    private calculateRoute(route: string[], target: string): number {
        return this._caves.get(route[route.length - 1])?.filter(cave => !route.includes(cave) || cave.toUpperCase() === cave)
            .map(cave =>
                cave == target ? 1 : this.calculateRoute([...route, cave], target)
            ).reduce((c, p) => c + p, 0)!;
    }
}