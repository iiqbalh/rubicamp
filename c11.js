const { readFileSync } = require('node:fs');
const hasil = readFileSync('./data.json', 'utf-8');
data = JSON.parse(hasil);


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(`Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n
Pertanyaan: ${data[0].definition}
Tebakan: `, (txt) => {
    if (txt === data[0].term) {
        console.log('Selamat Anda Benar!')
        rl.question(`\nPertanyaan: ${data[1].definition}
Tebakan: `, (name) => {
            if (name === data[1].term) {
                console.log('Selamat Anda Benar!')
                rl.close();
            } else {
                console.log('Wkwkwk, Anda kurang beruntung!')
                rl.close();
            }
        });
    } else {
        console.log('Wkwkwk, Anda kurang beruntung!')
    }
});

rl.on('close', () => {
    console.log(`\nHore Anda Menang!\n`)
})










// const rl = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: `Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n
// Pertanyaan: ${data[0].definition}
// Tebakan: `,
// });

// rl.prompt()

// rl.on(`line`, (txt) => {
//     if (txt === data[0].term) {
//         console.log('Selamat Anda Benar!')
//     } else {
//         console.log('Wkwkwk, Anda kurang beruntung!')
//     }
//     process.exit(0)
// });


