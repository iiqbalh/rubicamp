const { readFileSync } = require('node:fs');
const path = readFileSync('./data.json', 'utf-8');
const data = JSON.parse(path)
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: ',
});
let count = 0;

console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n');

console.log(`Pertanyaan: ${data[count].definition}`);
rl.prompt();

rl.on('line', (line) => {

    if (line !== data[count].term) {
        console.log('wkwkwk, Anda kurang beruntung!\n');
    } else {
        console.log('Selamat Anda Benar!\n');
        count++;
        if (count === data.length) rl.close();
        console.log(`Pertanyaan: ${data[count].definition}`);
    }
    rl.prompt();
}).on('close', () => {
    console.log('Hore Anda Menang!\n');
    process.exit(0);
});

