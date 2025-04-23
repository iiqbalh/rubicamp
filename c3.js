const roman = (n, result = '') => {

    const map = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }

    for (const key in map) {
        if (n >= map[key]) {
            if (n !== 0) {
                return roman(n - map[key], result += key);
            }
        }
    }

    return result;
}

console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", roman(4));
console.log("9     | IX       | ", roman(9));
console.log("13    | XIII     | ", roman(13));
console.log("1453  | MCDLIII  | ", roman(1453));
console.log("1646  | MDCXLVI  | ", roman(1646));