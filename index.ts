import { MaxSum } from "./MaxPossibleSum/MaxSum";
import * as readline from 'readline';
import * as fs from 'fs';

const input: string[] = [];

readline.createInterface({
    input: fs.createReadStream(`input/bigTriangle.txt`),
    terminal: false
}).on('line', function(line) {
   input.push(line);
}).on('close', function() { 
    const maxSum = new MaxSum(input);
    console.log(`The max Score is ${maxSum.Score}`);
});
