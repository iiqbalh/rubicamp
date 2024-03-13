const roman = num => {

    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    // let romanNumeral = '';

    // for (let i = 0; i < romanNumerals.length; i++) {

    //     while (num >= romanNumerals[i].value) {
    //         romanNumeral += romanNumerals[i].numeral;
    //         num -= romanNumerals[i].value;
    //     };
        
    // };

    return romanNumerals;
}
console.log(roman())
// console.log("Script Testing untuk Konversi Romawi\n");
// console.log("input | expected | result");
// console.log("------|----------|-------");
// console.log("4     | IV       | ", roman(4));
// console.log("9     | IX       | ", roman(9));
// console.log("13    | XIII     | ", roman(13));
// console.log("1453  | MCDLIII  | ", roman(1453));
// console.log("1646  | MDCXLVI  | ", roman(1646));