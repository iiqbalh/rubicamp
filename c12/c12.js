// const txt = process.argv[2];

// if(!txt){
//     console.log(`Tolong sertakan nama file sebagai inputan soalnya.\nMisalnya 'node solution.js data.json'`)
//     process.exit();
// }

// const { readFileSync } = require('node:fs');
// const hasil = readFileSync(`${txt}`, 'utf-8');
// const data = JSON.parse(hasil);

// if (txt) {
//     console.log(`Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini ${txt}!\nUntuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanya lagi.\n`);

//     const rl = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout,
//         prompt: 'Jawaban: '
//     });

//     let counter = 0;
//     let count = 1;

//     console.log(`Pertanyaan: ${data[counter].definition}`);

//     rl.prompt();

//     rl.on('line', (line) => {
//         if (line == data[counter].term) {
//             console.log(`\nAnda Beruntung!\n`);
//             count = 1;
//             counter++;

//             if (counter === data.length) rl.close();
//             console.log(`Pertanyaan: ${data[counter].definition}`);

//         } else if (line === 'skip') {
//             data.push(data[counter]);
//             data.splice(counter, 1);

//             console.log(`\nPertanyaan: ${data[counter].definition}`);
//             count = 1;

//         } else {
//             console.log(`\nAnda kurang beruntung! anda telah salah ${count++}, silahkan coba lagi.`);
//         }

//         rl.prompt();

//     }).on('close', () => {
//         console.log('Anda berhasil!');
//         process.exit(0);
//     });
// } else {
//     return error;
// }












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

if(text) {
    console.log(`Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini '${text}'.
Untuk bermain jawablah dengan jawaban yang sesuai.
Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.
        `);


    console.log(`pertanyaan: ${data[count].definition}`)

    rl.prompt();

    rl.on('line', (line) => {

        if(line === 'skip') {
            data.push(data[count]);
            data.splice(count, 1);
            console.log(`\npertanyaan: ${data[count].definition}`);
            
        }else if (line !== data[count].term) {
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
        console.log('Hore Anda Menang!\n');
        process.exit(0);
    });
} else {
    return;
}