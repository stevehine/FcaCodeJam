import { Stack } from "stack-typescript";

export class OppositesAttract {
    private _size: number;

    constructor(data: string[]) {
        const elementStack = new Stack<string>();
        elementStack.push(" ");
        for (const char of data[0]) {
            const lastChar = elementStack.top;
            if (char.toLowerCase() === lastChar.toLowerCase()
                && char !== lastChar) {
                elementStack.pop()
            } else {
                elementStack.push(char);
            }
        }
        this._size = elementStack.length - 1;
    }

    public get Size() { return this._size; }
}