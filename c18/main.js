const sqlite3 = require('sqlite3')
const path = require('path')
const redline = require('node:readline')

const dbpath = path.join(path.resolve(), 'db', 'university.db')
const db = new sqlite3.Database(dbpath);

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});




rl.question(`=========================================================================================================================================================================
Welcome to Univesitas Pendidikan Indonesia
Jl.Setiabudhi No.255
=========================================================================================================================================================================
username: `, answer => {

        db.all("SELECT * FROM users", (err, data) => {
            if (err) return console.log(err)
            
            data.forEach(data => {
                if (answer === data.userName) {
                    rl.question("password: ", answer =>{
                        if (answer === data.password.toString()) {
                            console.log(`=========================================================================================================================================================================
                            \nwelcome, ${data.userName}. Your access level is : ${data.role.toUpperCase()}
                            \n=========================================================================================================================================================================
                            \nsilahkan pilih opsi dibawah ini :
                            \n[1] Mahasiswa 
                            \n[2] Jurusan
                            \n[3] Dosen
                            \n[4] Mata Kuliah
                            \n[5] Kontrak
                            \n[6] Keluar
                            `);
                            
                            rl.question("Masukan salah satu nomor dari opsi diatas : ", index => {
                                switch (index) {
                                    case "1":
                                        console.log('mahasiswa');
                                        rl.close();
                                        break;
                                    case "2":
                                        console.log('jurusan')
                                        rl.close();
                                        break;
                                    case "3":
                                        console.log('dosen')
                                        rl.close();
                                        break;
                                    case "4":
                                        console.log('matakuliah')
                                        rl.close();
                                        break;
                                    case "5":
                                        console.log('kontrak')
                                        rl.close();
                                        break;
                                    case "6":
                                        console.log('keluar')
                                        rl.close();
                                        break;
                                    default:
                                        console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi`)
                                        rl.close();
                                        break;
                                }
                            });
                        } else {
                            console.log('passwor salah')
                            rl.close();
                        }
                    })
                } else {
                    console.log('username tidak terdaftar')
                    rl.close();
                }
            })
        })

});