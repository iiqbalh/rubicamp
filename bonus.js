function spellingWord(word) {
    const dictionary = [ 'pro', 'gram', 'merit', 'program', 'it', 'programmer'];

    let arr = word.split(" ")
    console.log(arr)

    let result = [];

    // for (let i = 0; i < dictionary.length; i++) {
    //     if (arr.includes(dictionary[i])) {
    //         console.log(dictionary[i])
    //     }
    // }

    // console.log(result)

}
spellingWord('program')
spellingWord('programit')
spellingWord('programmerit')
spellingWord('programlala')
spellingWord('proletarian')