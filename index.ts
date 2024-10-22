import { MaxSum } from "./MaxPossibleSum/MaxSum";
import * as readline from 'readline';
import * as fs from 'fs';
import { OppositesAttract } from "./OppositesAttract/OppositesAttract";

const input: string[] = [];

readline.createInterface({
    input: fs.createReadStream(`input/elements.txt`),
    terminal: false
}).on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const opposites = new OppositesAttract(input);
    console.log(`The final Size is ${opposites.Size}`);
});
