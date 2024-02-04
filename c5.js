function stringManipulation(word) {
    arrs = []

    if (word[0] == 'a' || word[0] == 'i' || word[0] == 'u' || word[0] == 'e' || word[0] == 'o') {
        arrs = word;
    } else {
        arrs = word.slice(1) + word[0] + 'nyo'
    }
    console.log(arrs)
}

stringManipulation('ayam')
stringManipulation('bebek')