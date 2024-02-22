const { readFileSync } = require('node:fs');
const hasil = readFileSync('./data.json', 'utf-8');
const data = JSON.parse(hasil);
// const splice = data.splice(1, 1)
// const push = data.push(splice[0])


// console.log(splice)
// console.log(data)
const txt = process.argv[2];

if (txt === 'data.json') {
    console.log(`Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini 'data.json'!\nUntuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanya lagi.\n`);

    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Jawaban: '
    });

    let counter = 0;
    let count = 1;

    console.log(`Pertanyaan: ${data[counter].definition}`);

    rl.prompt();

    rl.on('line', (line) => {
        if (line == data[counter].term) { //jika benar
            console.log(`\nAnda Beruntung!\n`);
            count = 1;
            counter++;

            if (counter === data.length) rl.close();
            console.log(`Pertanyaan: ${data[counter].definition}`);

        } else if (line === 'skip') { //jika yg lainnya benar
            const splice = data.splice(counter, counter);
            data.push(splice[0]);

            console.log(`\nPertanyaan: ${data[counter].definition}`);
            count = 1;

        } else { //jika salah
            console.log(`\nAnda kurang beruntung! anda telah salah ${count++}, silahkan coba lagi.`);
        }
        console.log(counter)

        rl.prompt();

    }).on('close', () => {
        console.log('Anda berhasil!');
        process.exit(0);
    });
} else {
    console.log(`Tolong sertakan nama file sebagai inputan soalnya\nMisalnya 'node solution.js data.json'`);
}
