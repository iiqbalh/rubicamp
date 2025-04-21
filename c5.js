const stringManipulation = word => {

    let result = word.toLowerCase()
    let vocals = ['aiueo']

    vocals.forEach(vocal => {
        if (vocal.includes(result[0])) {
            console.log(result)
        } else {
            console.log(`${result.slice(1)}${result[0]}nyo`)
        }
    })
}

stringManipulation('AYAM');
stringManipulation('BEBEK');