const stringManipulation = word => {
    
    let arrs = '';
    lower = word.toLowerCase();

    if (lower[0] == 'a' || lower[0] == 'i' || lower[0] == 'u' || lower[0] == 'e' || lower[0] == 'o') {
        arrs = lower;
    } else {
        arrs = lower.slice(1) + lower[0] + 'nyo';
    }

    console.log(arrs);
}

stringManipulation('AYAM');
stringManipulation('BEBEK');