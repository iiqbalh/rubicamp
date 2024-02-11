const pola = str => {
    
    arr = str.split(" ");
    const [num, , pengali, , hasil] = arr;
    result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (num.replace('#', i) * pengali == hasil.replace('#', j)) {
                result.push(i, j);
            }
        }
    }

    return result;
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));