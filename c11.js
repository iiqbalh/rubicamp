const { readFileSync } = require('node:fs');
const hasil = readFileSync('./data.json', 'utf-8');
const data = JSON.parse(hasil);


const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let counter = 0;

rl.question(`Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!\n
Pertanyaan: ${data[counter].definition}
Tebakan: `, (txt) => {

//jika jawaban benar
    if (txt === data[0].term) { 
        console.log('Selamat Anda Benar!');
        counter++;

        rl.question(`\nPertanyaan: ${data[1].definition}
Tebakan: `, (txt) => {
            if (txt === data[1].term) {
                console.log('Selamat Anda Benar!');
                rl.close();
            } else {
                console.log('Wkwkwk, Anda kurang beruntung!');
//-------------------------------------------------------------------

                rl.question(`\nTebakan: `, (txt) => { //menebak ulang pertanyaan kedua
                    if (txt === data[1].term) {
                        console.log('Selamat Anda Benar!');
                        rl.close();
                    } else {
                        console.log('Wkwkwk, Anda kurang beruntung!');
                        rl.close();
                    }
                })
            }
        });

//---------------------------------------------------------------------

//jika jawaban salah
    } else { 
        console.log('Wkwkwk, Anda kurang beruntung!');

        rl.question(`\nTebakan: `, (txt) => { //menebak ulang pertanyaan pertama
            if (txt === data[counter].term) {
                console.log('Selamat Anda Benar!');
                counter++;
//---------------------------------------------------------------------

                rl.question(`\nPertanyaan: ${data[1].definition}
Tebakan: `, (txt) => {                                          //lanjut ke pertanyaan kedua
                    if (txt === data[1].term) {
                        console.log('Selamat Anda Benar!');
                        rl.close();
                    } else {
                        console.log('Wkwkwk, Anda kurang beruntung!');
//---------------------------------------------------------------------

                        rl.question(`\nTebakan: `, (txt) => {
                            if (txt === data[1].term) {
                                console.log('Selamat Anda Benar!');
                                rl.close();
                            } else {
                                console.log('Wkwkwk, Anda kurang beruntung!');
                                rl.close();
                            }
                        })
                    }
                });

            } else {
                console.log('Wkwkwk, Anda kurang beruntung!');
                rl.close();
            }
        });
    }

});

rl.on('close', () => {
    console.log(`\nHore Anda Menang!\n`);
});



