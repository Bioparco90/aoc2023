import { readFileSync } from 'fs';

const check = (i, prev, next) => {
    const numbers = file[i].match(/\b\d+\b/g);
    if (!numbers)
        return 0;

    const actualSymbols = file[i].match(/[^a-zA-Z0-9.]/g);
    const prevSymbols = prev?.match(/[^a-zA-Z0-9.]/g);
    const nextSymbols = next?.match(/[^a-zA-Z0-9.]/g);

    if (!actualSymbols && !prevSymbols && !nextSymbols)
        return 0


    let rowSum = 0;
    let position = 0;
    numbers.forEach(number => {
        const start = file[i].indexOf(number, position);
        const end = start + number.length;
        let flag = false;

        let symbolPosition = 0;
        actualSymbols?.forEach(symbol => {
            const index = file[i].indexOf(symbol, symbolPosition);
            if (index == start - 1 || index == end) {
                rowSum += Number(number);
                flag = true;
            }
            symbolPosition = index + 1;
        });
        
        if (!flag) {
            symbolPosition = 0;
            prevSymbols?.forEach(symbol => {
                const index = prev.indexOf(symbol, symbolPosition);
                if (index >= start - 1 && index <= end) {
                    rowSum += Number(number);
                    flag = true;
                }
                symbolPosition = index + 1;
            });
        }

        if (!flag) {
            symbolPosition = 0;
            nextSymbols?.forEach(symbol => {
                const index = next.indexOf(symbol, symbolPosition);
                if (index >= start - 1 && index <= end)
                    rowSum += Number(number);
                symbolPosition = index + 1;
            });
        }

        position = end;
    });

    return rowSum;
}

const file = readFileSync("day3/input.txt", "utf8").split("\r\n");

let prev = null;
let next = file[1];
let sum = 0;

for (let i = 0; i < file.length; i++) {
    next = file[i + 1]
    sum += check(i, prev, next);
    prev = file[i];
}

console.log(sum);
