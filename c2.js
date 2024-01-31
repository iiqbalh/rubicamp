function deretKaskus(n) {
    const arr = [];

    for (let i = 1; i <= n; i++) {
        let num = i * 3;
        if (num % 5 === 0 && num % 6 === 0) {
            arr.push("KASKUS")
        } else if (num % 6 === 0){
            arr.push("KUS")
        } else if (num % 5 === 0) {
            arr.push("KAS")
        } else {
            arr.push(num)
        }
    }
    return arr
}
console.log(deretKaskus(10));

