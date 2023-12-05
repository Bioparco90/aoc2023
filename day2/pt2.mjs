import { readFileSync } from "fs";

const singleGameTest = (text) => {
    let colors = {
        "red": 0,
        "green": 0,
        "blue": 0
    }

    let [_, game] = text.split(":");
    game = game.replace(/;/g, ",").split(",");

    for (const item of game) {
        const [quantity, color] = item.trim().split(" ");
        if (parseInt(quantity) > colors[color])
            colors[color] = parseInt(quantity);
    }

    return colors.red * colors.green * colors.blue;
}

/* ---------------------------------------------------------- */
const filePath = "day2/input.txt";
const file = readFileSync(filePath, 'utf8', (err, _data) => {
    if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
    }
}).split("\r\n");

let numbers = 0;
file.forEach(game => {
    numbers += singleGameTest(game);
});

console.log(numbers);
