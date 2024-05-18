const sqlite3 = require('sqlite3')
const path = require('path')
const redline = require('node:readline')

var Table = require('cli-table')
const dbpath = path.join(path.resolve(), 'db', 'university.db')
const db = new sqlite3.Database(dbpath)

const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function line() {
    console.log('=============================================================================================================================================')
}

function welcome() {
    line()
    console.log('Welcome to Univesitas Pendidikan Indonesia');
    console.log('Jl.Setiabudhi No.255');
    line()
    username()
}

welcome()

function username() {
    rl.question('username: ', answer => {

        db.get("select * from users where userName = ?", [answer], (err, user) => {
            if (err) return console.log("please contact administrator", err);

            if (!user) {
                console.log("username is not found");
                username()
            } else {
                password(user)
            }

        })
    });
}

function password(user) {
    rl.question('password: ', answer => {
        if (answer === user.password.toString()) {
            line()
            console.log(`welcome, ${user.userName}. Your access level is : ${user.role.toUpperCase()}`);
            line()

            fisrtMenu()
        } else {
            console.log("password is not found");
            password(user)
        }
    });
}

function daftarMahasiswa() {
    const table = new Table({
        head: ['nim', 'id_jurusan', 'nama_mahasiswa', 'umur', 'alamat']
        , colWidths: [10, 20, 20, 10, 20]
    });

    db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.nim, data.id_jurusan, data.nama_mahasiswa, data.umur, data.alamat])
        });
        console.log(table.toString());
        line()

        opsiMahasiswa()
    })
}

function daftarJurusan() {
    const table = new Table({
        head: ['id_jurusan', 'jurusan']
        , colWidths: [20, 20]
    });

    db.all("select * from jurusan", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_jurusan, data.jurusan])
        });
        console.log(table.toString());

        opsiJurusan()
    })
}

function daftarDosen() {
    const table = new Table({
        head: ['id_dosen', 'nama_dosen']
        , colWidths: [20, 20]
    });

    db.all("select * from dosen", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_dosen, data.nama_dosen])
        });
        console.log(table.toString());

        opsiDosen()
    })
}

function daftarMatakuliah() {
    const table = new Table({
        head: ['id_matakuliah', 'matakuliah', 'sks']
        , colWidths: [20, 20, 10]
    });

    db.all("select * from dosen", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_matakuliah, data.matakuliah, data.sks])
        });
        console.log(table.toString());

        opsiMatakuliah()
    })
}

function fisrtMenu() {
    console.log(`silahkan pilih opsi di bawah ini :
[1] Mahasiswa 
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
    `);

    line()

    rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

        line()

        switch (index) {
            case "1":
                opsiMahasiswa()
                break;
            case "2":
                opsiJurusan()
                break;
            case "3":
                opsiDosen()
                line()
                break;
            case "4":
                opsiMatakuliah()
                line()
                break;
            case "5":
                console.log('kontrak');
                line()
                break;
            case "6":
                process.exit();
            default:
                console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                break;
        }
    });
}


function opsiMahasiswa() {
    console.log(`Silahkan pilih opsi di bawah ini :
[1] Daftar Mahasiswa 
[2] Cari Mahasiswa
[3] Tambah Mahaiswa
[4] Hapus mahasiswa
[5] Kembali
    `);

    line()

    rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {
        
        line()

        switch (index) {
            case "1":
                daftarMahasiswa()
                break;
            case "2":
                console.log('cari')
                break;
            case "3":
                console.log('tambah')
                break;
            case "4":
                console.log('hapus')
                break;
            case "5":
                fisrtMenu()
                break;
            default:
                console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                break;
        }
    });
}

function opsiJurusan() {
    console.log(`Silahkan pilih opsi di bawah ini :
[1] Daftar Jurusan 
[2] Cari Jurusan
[3] Tambah Jurusan
[4] Hapus Jurusan
[5] Kembali
    `);

    line()

    rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

        line()

        switch (index) {
            case "1":
                daftarJurusan()
                break;
            case "2":
                console.log('cari')
                break;
            case "3":
                console.log('tambah')
                break;
            case "4":
                console.log('hapus')
                break;
            case "5":
                fisrtMenu()
                break;
            default:
                console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                break;
        }
    });
}

function opsiDosen() {
    console.log(`Silahkan pilih opsi di bawah ini :
[1] Daftar Dosen 
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
    `);

    line()

    rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

        line()

        switch (index) {
            case "1":
                daftarDosen()
                break;
            case "2":
                console.log('cari')
                break;
            case "3":
                console.log('tambah')
                break;
            case "4":
                console.log('hapus')
                break;
            case "5":
                fisrtMenu()
                break;
            default:
                console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                break;
        }
    });
}

function opsiMatakuliah() {
    console.log(`Silahkan pilih opsi di bawah ini :
[1] Daftar Matakuliah 
[2] Cari Matakuliah
[3] Tambah Matakuliah
[4] Hapus Matakuliah
[5] Kembali
    `);

    line()

    rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

        line()

        switch (index) {
            case "1":
                daftarMatakuliah()
                break;
            case "2":
                console.log('cari')
                break;
            case "3":
                console.log('tambah')
                break;
            case "4":
                console.log('hapus')
                break;
            case "5":
                fisrtMenu()
                break;
            default:
                console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                break;
        }
    });
}

function opsiKontrak() {
    console.log(`Silahkan pilih opsi di bawah ini :
[1] Daftar Kontrak 
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Kembali
    `);

    line()

    rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

        line()

        switch (index) {
            case "1":
                console.log('daftar')
                break;
            case "2":
                console.log('cari')
                break;
            case "3":
                console.log('tambah')
                break;
            case "4":
                console.log('hapus')
                break;
            case "5":
                fisrtMenu()
                break;
            default:
                console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                break;
        }
    });
}