function weirdMultiply(sentence) {
    str = sentence.toString()
    count = 1

    for (let i = 0; i < str.length; i++) {
        count *= str[i];
    }

    if (str < 10) {
        return count;
    } else {
        return weirdMultiply(count);
    }
}

console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))