export { }
declare global {
    interface Array<T> {
        pairwise(): pairs[];
        zip(input: T[], func: (a: T, b: T) => T): T[]
        first(): T;
    }
}
// Given a list 1,2,3,4,5
// return the pairings 1,2 + 2,3 + 3,4 + 4,5
Array.prototype.pairwise = function <T>(this: T[]): pairs[] {
    const output: pairs[] = [];
    this.reduce((first, second) => { output.push({ first, second }); return second; })
    return output;
}

Array.prototype.zip = function <T>(this: T[], input: T[], func: (a: T, b: T) => T) {
    return this.map((v, i) => func(v, input[i]));
}

Array.prototype.first = function <T>(this: T[]): T {
    return this[0];
}

class pairs {
    first: any;
    second: any;
}