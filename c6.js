function sentencesManipulation(sentence) {
    arr2 = [];
    arr = sentence.toLowerCase().split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].at(0) == 'a' || arr[i].at(0) == 'i' || arr[i].at(0) == 'u' || arr[i].at(0) == 'e' || arr[i].at(0) == 'o') {
            arr2.push(arr[i])
        } else {
            arr2.push(arr[i].slice(1) + arr[i].at(0) + 'nyo')
        }
    }
    console.log(arr2.join(" "))
}

sentencesManipulation('ibu pergi ke pasar bersama aku')