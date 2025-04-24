const text = process.argv[2]

if (!text) {
    console.log("Tolong sertakan nama file sebagai inputan soalnya\nMisalnya 'node c12.js data.json'");
    process.exit();
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: ',
});
const { readFileSync } = require('node:fs');
const path = readFileSync(`${text}`, 'utf-8');
const data = JSON.parse(path);
let count = 0;
let wrong = 1

if (text) {
    console.log(`Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini '${text}'.
Untuk bermain jawablah dengan jawaban yang sesuai.
Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.
        `);


    console.log(`pertanyaan: ${data[count].definition}`)

    rl.prompt();

    rl.on('line', (line) => {

        if (line === 'skip') {
            data.push(data[count]);
            data.splice(count, 1);
            console.log(`\npertanyaan: ${data[count].definition}`);

        } else if (line !== data[count].term) {
            console.log(`Anda kurang beruntung! Anda telah salah ${wrong} kali, silahkan coba lagi.\n`);
            wrong++;
        } else {
            console.log('Anda Beruntung!\n');
            count++;
            wrong = 1;
            if (count === data.length) rl.close();
            console.log(`Pertanyaan: ${data[count].definition}`);
        }
        rl.prompt();
    }).on('close', () => {
        console.log('Anda Berhasil!\n');
        process.exit(0);
    });
} else {
    return;
}