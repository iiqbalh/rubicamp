const stringManipulation = word => {

    let wordLow = word.toLowerCase();
    let vocals = 'aiueo';

    if (vocals.includes(wordLow[0])) {
        console.log(wordLow);
    } else {
        console.log(`${wordLow.slice(1)}${wordLow[0]}nyo`);
    }
}

stringManipulation('AYAM');
stringManipulation('BEBEK');