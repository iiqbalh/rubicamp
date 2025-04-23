function weirdMultiply(sentence) {

    let num = 1;

    for(let i of sentence.toString()) num *= i;
    if(sentence < 10) return num;
    else return weirdMultiply(num)   ;

}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));