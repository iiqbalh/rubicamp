// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('tulis kalimatmu di sini > ', sentence => {

//     let arr = sentence.split(" ");
//     let vocals = 'aAiIuUeEoO'
//     let result = []

//     arr.forEach(item => {
//         if (vocals.includes(item[0])) {
//             result.push(item)
//         } else {
//             result.push(`${item.slice(1)}${item[0]}nyo`)
//         }
//     })

//     console.log('hasil konversi: ', result.join(" ").toLowerCase());

//     rl.close()
// })






const { createInterface } = require('node:readline');
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu di sini> ',
});

rl.prompt();

rl.on('line', (line) => {
    let arr = line.split(" ");
    let vocals = 'aAiIuUeEoO';
    let result = [];

    switch (line) {
        case 'hello':
            console.log('word!');
            break;
        default:
            arr.forEach(item => {
                if (vocals.includes(item[0])) {
                    result.push(item);
                } else {
                    result.push(`${item.slice(1)}${item[0]}nyo`);
                }
            })
            console.log('hasil konversi: ', result.join(" ").toLowerCase());
    }
    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});