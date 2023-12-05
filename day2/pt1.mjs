import { readFileSync } from "fs";

const maxims = {
    "red": 12,
    "green": 13,
    "blue": 14
}

const singleGameTest = (text) => {
    const game = text.split(":");
    const gameID = parseInt(game[0].split(" ")[1]);
    const grabs = game[1].split(";");
    for (const grab of grabs) {
        if (!check(grab))
            return 0;
    }

    return gameID;
}

const check = (grab) => {
    const items = grab.split(",");
    for (const item of items) {
        const [quantity, color] = item.trim().split(" ");
        if (quantity > maxims[color])
            return false;
    }
    return true;
}

/* ------------------------------------------------------------------ */
const filePath = "day2/input.txt";
const file = readFileSync(filePath, 'utf8', (err, _data) => {
    if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
    }
}).split("\r\n");

let result = 0;
file.forEach(game => {
    result += singleGameTest(game);
});

console.log(result);
