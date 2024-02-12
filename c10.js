const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('tulis kalimatmu di sini > ', sentence => {
    
    arr2 = [];
    arr = sentence.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == 'a' || arr[i][0] == 'i' || arr[i][0] == 'u' || arr[i][0] == 'e' || arr[i][0] == 'o') {
            arr2.push(arr[i]);
        } else if (arr[i][0] == 'A' || arr[i][0] == 'I' || arr[i][0] == 'U' || arr[i][0] == 'E' || arr[i][0] == 'O') {
            arr2.push(arr[i]);
        } else {
            arr2.push(arr[i].slice(1) + arr[i][0] + 'nyo');
        };
    };

    console.log(arr2.join(" "));
    
      readline.close();
    });