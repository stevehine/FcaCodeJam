
export class TinySubmarine {

    private _caves: Map<string, string[]>;
    constructor(data: string[]) {
        this._caves = new Map<string, string[]>();
        data.forEach(line => {
            const parts = line.split('-');
            if (this._caves.has(parts[0])) {
                this._caves.get(parts[0])?.push(parts[1]);
            } else {
                this._caves.set(parts[0], [parts[1]]);
            }
            if (this._caves.has(parts[1])) {
                this._caves.get(parts[1])?.push(parts[0]);
            } else {
                this._caves.set(parts[1], [parts[0]]);
            }
        });
    }

    public calculateRoutes(): number {
        return this.calculateRouteFrom(["start"]);
    }



    private calculateRouteFrom(route: string[]): number {
        return this._caves.get(route[route.length - 1])?.map(cave =>
            cave == 'end' ? 1 :
                (!route.includes(cave) || cave.toUpperCase() === cave) ?
                    this.calculateRouteFrom([...route, cave]) : 0
        ).reduce((c, p) => c + p)!;
    }
}