const { readFileSync } = require('node:fs');
const hasil = readFileSync('./data.json', 'utf-8');
const data = JSON.parse(hasil);


console.log(`Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n`)

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan: '
});


let counter = 0;

console.log(`Pertanyaan: ${data[counter].definition}`);

rl.prompt()

rl.on('line', (line) => {
    if (line !== data[counter].term) {
        console.log(`wkwkwk, Anda kurang beruntung!\n`);
    } else {
        console.log(`Selamat anda benar!\n`);
        counter++;
        if (counter === data.length) rl.close();
        console.log(`Pertanyaan: ${data[counter].definition}`)
    }

    rl.prompt()

}).on('close', () => {
    console.log('Hore Anda Menang!');
    process.exit(0);
});


