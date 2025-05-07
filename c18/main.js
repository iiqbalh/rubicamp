const sqlite3 = require('sqlite3');
const path = require('path');
const redline = require('node:readline');
const Table = require('cli-table');
const dbpath = path.join(path.resolve(), 'db', 'university.db');
const db = new sqlite3.Database(dbpath);
const rl = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function line() {
    console.log('========================================================================================================================================================');
}

function welcome() {
    line();
    console.log('Welcome to Universitas Pendidikan Indonesia\nJL. Setiabudhi No. 225');
    line();
    users();
}
welcome();

function users() {
    rl.question('Username : ', answer => {
        db.get("select * from users where userName = ?", [answer], (err, user) => {
            if (err) return console.log("please contact administrator", err);

            if (!user) {
                console.log("Username is not found");
                users();
            } else {
                password(user);
            };
        });
    });
};

function password(users) {
    rl.question('Password : ', answer => {
        if (users.password === Number(answer)) {
            line();
            console.log(`Welcome, ${users.userName}. Your access level is : ${users.role}`);
            line();
            opsiAwal();
        } else {
            console.log("Password is not found");
            password(users);
        };
    });
};

function opsiAwal() { // MENU AWAL!
    console.log(`\nSilahkan pilih opsi di bawah ini :
[1]. Mahasiswa
[2]. Jurusan
[3]. Dosen
[4]. Mata kuliah
[5]. Kontrak
[6]. Keluar\n`);
    line();

    rl.question('Masukan salah satu nomer dari opsi di atas : ', answer => {
        switch (answer) {
            case '1':
                line();
                tableMahasiswa();
                break;
            case '2':
                line();
                tableJurusan();
                break;
            case '3':
                line();
                tableDosen();
                break;
            case '4':
                line();
                tableMataKuliah();
                break;
            case '5':
                line();
                tableKontrak();
                break;
            case '6':
                line();
                console.log('Anda telah keluar');
                welcome();
                break;

            default:
                console.log(`Nomer yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                line();
                opsiAwal();
                break;
        };
    });
};

function tableMahasiswa() { //MAHASISWA!
    console.log(`\nSilahkan pilih opsi di bawah ini :
[1]. Daftar Mahasiswa
[2]. Cari Mahasiswa
[3]. Tambah Mahasiswa
[4]. Hapus Mahasiswa
[5]. Kembali`);
    line();

    rl.question('Masukan salah satu nomer dari opsi di atas : ', answer => {
        switch (answer) {
            case '1':
                daftarMahasiswa();
                break;
            case '2':
                cariMahasiswa();
                break;
            case '3':
                tambahMahasiswa();
                break;
            case '4':
                hapusMahasiswa();
                break;
            case '5':
                line();
                opsiAwal();
                break;

            default:
                console.log(`Nomer yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                line();
                tableMahasiswa();
                break;
        };
    });
};

function daftarMahasiswa() {
    const table = new Table({
        head: ['NIM', 'NAMA_MAHASISWA', 'UMUR', 'ALAMAT', 'ID_JURUSAN', 'JURUSAN']
        , colWidths: [10, 20, 20, 10, 20, 20]
    });

    db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.nim, data.nama_mahasiswa, data.tanggalLahir, data.alamat, data.id_jurusan, data.jurusan])
        });
        console.log(table.toString());
        line();
        tableMahasiswa();
    });
};

function cariMahasiswa() {
    rl.question('Masukan NIM Mahasiswa : ', answer => {
        db.get("select * from mahasiswa where nim = ?", [answer], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            if (!data) {
                console.log(`Mahasiswa dengan NIM ${answer}, tidak terdaftar`);
                cariMahasiswa();
            } else {
                console.log(`\n====================================
Detail Mahasiswa dengan NIM '${answer}' :
NIM        : ${data.nim}
Nama       : ${data.nama_mahasiswa}
Alamat     : ${data.alamat}
Id Jurusan : ${data.id_jurusan}\n`);
                line();
                tableMahasiswa();
            };
        });
    });
};

function tambahMahasiswa() {
    console.log('Lengkapi data di bawah ini :');
    const table = new Table({
        head: ['NIM', 'NAMA_MAHASISWA', 'UMUR', 'ALAMAT', 'ID_JURUSAN', 'JURUSAN']
        , colWidths: [10, 20, 20, 10, 20, 20]
    });

    db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.nim, data.nama_mahasiswa, data.tanggalLahir, data.alamat, data.id_jurusan, data.jurusan])
        });
        console.log(table.toString());
        tambah();
    });
};

function tambah() {
    rl.question('NIM : ', nim => {
        rl.question('Nama : ', nama => {
            rl.question('Tanggal Lahir : ', tanggalLahir => {
                rl.question('Alamat : ', alamat => {

                    const table = new Table({
                        head: ['ID_JURUSAN', 'JURUSAN']
                        , colWidths: [20, 20]
                    });

                    db.all("select * from jurusan", (err, data) => {
                        if (err) return console.log("please contact administrator", err);

                        data.forEach(data => {
                            table.push([data.id_jurusan, data.jurusan]);
                        });
                        console.log(table.toString());
                        rl.question('id jurusan : ', idJurusan => {
                            db.run("insert into mahasiswa values (?, ?, ?, ?, ?)", [nim, idJurusan, nama, tanggalLahir, alamat], (err) => {
                                if (err) return console.log("please contact administrator", err);
                                console.log('mahasiswa telah ditambahkan')
                                daftarMahasiswa();
                            });
                        });
                    });
                });
            });
        });
    });
};

function hapusMahasiswa() {
    rl.question('Masukan NIM mahasiswa : ', answer => {
        db.run("delete from mahasiswa where nim = ?", [answer], (err) => {
            if (err) return console.log("please contact administrator", err);

            console.log(`Data Mahasiswa dengan NIM ${answer}, telah dihapus`);
            line();
            tableMahasiswa();
        });
    });
};




function tableJurusan() { //JURUSAN!
    console.log(`\nSilahkan pilih opsi di bawah ini :
[1]. Daftar Jurusan
[2]. Cari Jurusan
[3]. Tambah Jurusan
[4]. Hapus Jurusan
[5]. Kembali`);
    line();

    rl.question('Masukan salah satu nomer dari opsi di atas : ', answer => {
        switch (answer) {
            case '1':
                daftarJurusan();
                break;
            case '2':
                cariJurusan();
                break;
            case '3':
                tambahJurusan();
                break;
            case '4':
                hapusJurusan();
                break;
            case '5':
                line();
                opsiAwal();
                break;

            default:
                console.log(`Nomer yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                line();
                tableJurusan();
                break;
        };
    });
};

function daftarJurusan() {
    const table = new Table({
        head: ['ID_JURUSAN', 'JURUSAN']
        , colWidths: [20, 20]
    });

    db.all("select * from jurusan", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_jurusan, data.jurusan]);
        });
        console.log(table.toString());
        line();
        tableJurusan();
    });
};

function cariJurusan() {
    rl.question('Masukan Id Jurusan : ', answer => {
        db.get("select * from jurusan where id_jurusan = ?", [answer], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            if (!data) {
                console.log(`Jurusan dengan Id jurusan ${answer}, tidak terdaftar`);
                cariJurusan();
            } else {
                console.log(`\n====================================
Detail Jurusan dengan Id Jurusan '${answer}' :
Id Jurusan : ${data.id_jurusan}
Jurusan    : ${data.jurusan}\n`);
                line();
                tableJurusan();
            };
        });
    });
};

function tambahJurusan() {
    const table = new Table({
        head: ['ID_JURUSAN', 'JURUSAN']
        , colWidths: [20, 20]
    });

    db.all("select * from jurusan", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_jurusan, data.jurusan]);
        });
        console.log(table.toString());
        rl.question('id jurusan : ', idJurusan => {
            rl.question('jurusan : ', jurusan => {
                db.run("insert into jurusan values (?, ?)", [idJurusan, jurusan], (err) => {
                    if (err) return console.log("please contact administrator", err);
                    console.log('Jurusan telah ditambahkan ke database')
                    line();
                    tableJurusan();
                });
            });
        });
    });
};

function hapusJurusan() {
    rl.question('Masukan Id Jurusan : ', answer => {
        db.run("delete from jurusan where id_jurusan = ?", [answer], (err) => {
            if (err) return console.log("please contact administrator", err);

            console.log(`Data Jurusan ${answer}, telah dihapus`);
            line();
            tableJurusan();
        });
    });
};




function tableDosen() { //DOSEN!
    console.log(`\nSilahkan pilih opsi di bawah ini :
[1]. Daftar Dosen
[2]. Cari Dosen
[3]. Tambah Dosen
[4]. Hapus Dosen
[5]. Kembali`);
    line();

    rl.question('Masukan salah satu nomer dari opsi di atas : ', answer => {
        switch (answer) {
            case '1':
                daftarDosen();
                break;
            case '2':
                cariDosen();
                break;
            case '3':
                tambahDosen();
                break;
            case '4':
                hapusDosen();
                break;
            case '5':
                line();
                opsiAwal();
                break;

            default:
                console.log(`Nomer yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                line();
                tableDosen();
                break;
        };
    });
};

function daftarDosen() {
    const table = new Table({
        head: ['ID_DOSEN', 'NAMA_DOSEN']
        , colWidths: [20, 20]
    });

    db.all("select * from dosen", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_dosen, data.nama_dosen]);
        });
        console.log(table.toString());
        line();
        tableDosen();
    });
};

function cariDosen() {
    rl.question('Masukan Id Dosen : ', answer => {
        db.get("select * from dosen where id_dosen = ?", [answer], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            if (!data) {
                console.log(`Dosen dengan Id Dosen ${answer}, tidak terdaftar`);
                cariDosen();
            } else {
                console.log(`\n====================================
Detail Dosen dengan Id Dosen '${answer}' :
Id Dosen   : ${data.id_dosen}
Nama Dosen : ${data.nama_dosen}\n`);
                line();
                tableDosen();
            };
        });
    });
};

function tambahDosen() {
    const table = new Table({
        head: ['ID_DOSEN', 'NAMA_DOSEN']
        , colWidths: [20, 20]
    });

    db.all("select * from dosen", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_dosen, data.nama_dosen]);
        });
        console.log(table.toString());
        rl.question('id dosen : ', idDosen => {
            rl.question('nama dosen : ', namaDosen => {
                db.run("insert into dosen values (?, ?)", [idDosen, namaDosen], (err) => {
                    if (err) return console.log("please contact administrator", err);
                    console.log('Dosen telah ditambahkan ke database');
                    line();
                    tableDosen();
                });
            });
        });
    });
};

function hapusDosen() {
    rl.question('Masukan Id Dosen : ', answer => {
        db.run("delete from dosen where id_dosen = ?", [answer], (err) => {
            if (err) return console.log("please contact administrator", err);

            console.log(`Data Dosen ${answer}, telah dihapus`);
            line();
            tableDosen();
        });
    });
};



function tableMataKuliah() { //MATAKULIAH!
    console.log(`\nSilahkan pilih opsi di bawah ini :
[1]. Daftar Mata Kuliah
[2]. Cari Mata Kuliah
[3]. Tambah Mata Kuliah
[4]. Hapus Mata Kuliah
[5]. Kembali`);
    line();

    rl.question('Masukan salah satu nomer dari opsi di atas : ', answer => {
        switch (answer) {
            case '1':
                daftarMataKuliah();
                break;
            case '2':
                cariMataKuliah();
                break;
            case '3':
                tambahMataKuliah();
                break;
            case '4':
                hapusMataKuliah();
                break;
            case '5':
                line();
                opsiAwal();
                break;

            default:
                console.log(`Nomer yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                line();
                tableMataKuliah();
                break;
        };
    });
};

function daftarMataKuliah() {
    const table = new Table({
        head: ['ID_MATAKULIAH', 'MATAKULIAH', 'SKS']
        , colWidths: [20, 40, 10]
    });

    db.all("select * from matakuliah", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_matakuliah, data.matakuliah, data.sks]);
        });
        console.log(table.toString());
        line();

        tableMataKuliah();
    });
};

function cariMataKuliah() {
    rl.question('Masukan Id Mata Kuliah : ', answer => {
        db.get("select * from matakuliah where id_matakuliah = ?", [answer], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            if (!data) {
                console.log(`Mata Kuliah dengan Id Mata kuliah ${answer}, tidak terdaftar`);
                cariMataKuliah();
            } else {
                console.log(`\n===============================================
Detail Mata Kuliah dengan Id Mata Kuliah '${answer}' :
Id Mata Kuliah : ${data.id_matakuliah}
Mata Kuliah    : ${data.matakuliah}
SKS            : ${data.sks}\n`);
                line();
                tableMataKuliah();
            };
        });
    });
};

function tambahMataKuliah() {
    const table = new Table({
        head: ['ID_MATAKULIAH', 'MATAKULIAH', 'SKS']
        , colWidths: [20, 40, 10]
    });

    db.all("select * from matakuliah", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id_matakuliah, data.matakuliah, data.sks]);
        });
        console.log(table.toString());
        rl.question('Id matakuliah : ', idMatakuliah => {
            rl.question('Matakuliah : ', matakuliah => {
                rl.question('SKS : ', sks => {
                    db.run("insert into matakuliah values (?, ?, ?)", [idMatakuliah, matakuliah, sks], (err) => {
                        if (err) return console.log("please contact administrator", err);
                        console.log('Matakuliah telah ditambahkan ke database')
                        line();
                        tableMataKuliah();
                    });
                });
            });
        });
    });
};

function hapusMataKuliah() {
    rl.question('Masukan Id Mata Kuliah : ', answer => {
        db.run("delete from matakuliah where id_matakuliah = ?", [answer], (err) => {
            if (err) return console.log("please contact administrator", err);

            console.log(`Data Mata kuliah ${answer}, telah dihapus`);
            line();
            tableMataKuliah();
        });
    });
};




function tableKontrak() { //KONTRAK!
    console.log(`\nSilahkan pilih opsi di bawah ini :
[1]. Daftar Kontrak
[2]. Cari Kontrak
[3]. Tambah Kontrak
[4]. Hapus Kontrak
[5]. Update Nilai
[6]. Kembali`);
    line();

    rl.question('Masukan salah satu nomer dari opsi di atas : ', answer => {
        switch (answer) {
            case '1':
                daftarKontrak();
                break;
            case '2':
                cariKontrak();
                break;
            case '3':
                tambahKontrak();
                break;
            case '4':
                hapusKontrak();
                break;
            case '5':
                updateNilaiKontrak();
                break;
            case '6':
                line();
                opsiAwal();
                break;

            default:
                console.log(`Nomer yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
                line();
                tableKontrak();
                break;
        };
    });
};

function daftarKontrak() {
    const table = new Table({
        head: ['ID', 'NIM', 'NAMA_MAHASISWA', 'MATAKULIAH', 'NAMA_DOSEN', 'NILAI']
        , colWidths: [10, 10, 20, 40, 20, 10]
    });

    db.all(`select id, nim, nama_mahasiswa, matakuliah, nama_dosen, nilai 
        from kontrak join mahasiswa using(nim) join matakuliah using(id_matakuliah) join dosen using(id_dosen);`, (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : '']);
        });
        console.log(table.toString());
        line();

        tableKontrak();
    });
};

function cariKontrak() {
    mahasiswa(function daftarMahasiswa() {
        rl.question('Masukan NIM Mahasiswa : ', answer => {
            db.all("select * from kontrak where nim = ?", [answer], (err, data) => {
                if (err) return console.log("please contact administrator", err);

                const table = new Table({
                    head: ['ID', 'NIM', 'ID_MATAKULIAH', 'ID_DOSEN', 'NILAI']
                    , colWidths: [10, 10, 20, 10, 10]
                });

                data.forEach(data => {
                    table.push([data.id, data.nim, data.id_matakuliah, data.id_dosen, data.nilai ? data.nilai : '']);
                });
                console.log(`Daftar kontrak mahasiswa dengan NIM ${answer} adalah:`)
                console.log(table.toString());
                line();
                tableKontrak();
            });
        });
    });
};

function mahasiswa(callback) {
    db.all("select * from mahasiswa join jurusan using(id_jurusan)", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        const table = new Table({
            head: ['NIM', 'NAMA MAHASISWA', 'TANGGAL LAHIR', 'ALAMAT', 'ID JURUSAN', 'JURUSAN']
            , colWidths: [10, 20, 20, 10, 20, 20]
        });

        data.forEach(data => {
            table.push([data.nim, data.nama_mahasiswa, data.tanggalLahir, data.alamat, data.id_jurusan, data.jurusan]);
        });
        console.log(table.toString());
        callback();
    });
};

function tambahKontrak() {
    kontrakMahasiswa(function (nim) {
        kontrakMatakuliah(function (idMatakuliah) {
            kontrakDosen(function (idDosen) {
                db.run("insert into kontrak (nim, id_matakuliah, id_dosen) values (?, ?, ?)", [nim, idMatakuliah, idDosen], (err) => {
                    if (err) return console.log("please contact administrator", err);
                    console.log('kontrak telah ditambahkan');
                    line();
                    tableKontrak();
                });
            });
        });
    });
};

function kontrakMahasiswa(answer) {
    console.log('Lengkapi data di bawah ini :');
    const table = new Table({
        head: ['NIM', 'NAMA_MAHASISWA', 'UMUR', 'ALAMAT', 'ID_JURUSAN', 'JURUSAN']
        , colWidths: [10, 20, 20, 10, 20, 20]
    });

    db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.nim, data.nama_mahasiswa, data.tanggalLahir, data.alamat, data.id_jurusan, data.jurusan])
        });
        console.log(table.toString());
        rl.question('Masukkan NIM : ', nim => {
            answer(nim);
        });
    });
};

function kontrakMatakuliah(answer) {
    db.all("select * from matakuliah", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        const table = new Table({
            head: ['ID_MATAKULIAH', 'MATAKULIAH', 'SKS']
            , colWidths: [20, 40, 10]
        });

        data.forEach(data => {
            table.push([data.id_matakuliah, data.matakuliah, data.sks]);
        });
        console.log(table.toString());
        rl.question('Masukkan Id Matakuliah : ', idMatakuliah => {
            answer(idMatakuliah);
        });
    });
}

function kontrakDosen(answer) {
    db.all("select * from dosen", (err, data) => {
        if (err) return console.log("please contact administrator", err);

        const table = new Table({
            head: ['ID_DOSEN', 'NAMA_DOSEN']
            , colWidths: [20, 20]
        });

        data.forEach(data => {
            table.push([data.id_dosen, data.nama_dosen]);
        });
        console.log(table.toString());
        rl.question('Masukkan Id Dosen : ', idDosen => {
            answer(idDosen);
        });
    });
}

function hapusKontrak() {
    rl.question('Masukan Id kontrak : ', answer => {
        db.run("delete from kontrak where id = ?", [answer], (err) => {
            if (err) return console.log("please contact administrator", err);

            console.log(`Data Kontrak ${answer}, telah dihapus`);
            line();
            tableKontrak();
        });
    });
};

function updateNilaiKontrak() {
    updateNilai(function (nim) {
        db.all("select id, matakuliah, nilai from kontrak join matakuliah using(id_matakuliah) where nim = ?", [nim], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            const table = new Table({
                head: ['ID', 'MATAKULIAH', 'NILAI']
                , colWidths: [10, 40, 10]
            });

            data.forEach(data => {
                table.push([data.id, data.matakuliah, data.nilai ? data.nilai : '']);
            });
            console.log(`Detail mahasiswa dengan NIM '${nim} :'`)
            console.log(table.toString());
            line();
            rl.question('Masukkan Id yang akan dirubah nilainya : ', id => {
                line();
                rl.question('Tulis nilai yang baru : ', nilai => {
                    line();
                    db.run("update kontrak set nilai = (?) where id = (?)", [nilai.toUpperCase(), id], (err) => {
                        if (err) return console.log("please contact administrator", err);
                        console.log('Nilai Telah Diupdate');
                        const table = new Table({
                            head: ['ID', 'NIM', 'NAMA_MAHASISWA', 'MATAKULIAH', 'NAMA_DOSEN', 'NILAI']
                            , colWidths: [10, 10, 20, 40, 20, 10]
                        });

                        db.all(`select id, nim, nama_mahasiswa, matakuliah, nama_dosen, nilai 
                            from kontrak join mahasiswa using(nim) join matakuliah using(id_matakuliah) join dosen using(id_dosen);`, (err, data) => {
                            if (err) return console.log("please contact administrator", err);

                            data.forEach(data => {
                                table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : '']);
                            });
                            console.log(table.toString());
                            line()
                            tableKontrak()
                        });
                    });
                });
            });
        });

    })
}

function updateNilai(answer) {
    const table = new Table({
        head: ['ID', 'NIM', 'NAMA_MAHASISWA', 'MATAKULIAH', 'NAMA_DOSEN', 'NILAI']
        , colWidths: [10, 10, 20, 40, 20, 10]
    });

    db.all(`select id, nim, nama_mahasiswa, matakuliah, nama_dosen, nilai 
        from kontrak join mahasiswa using(nim) join matakuliah using(id_matakuliah) join dosen using(id_dosen);`, (err, data) => {
        if (err) return console.log("please contact administrator", err);

        data.forEach(data => {
            table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : '']);
        });
        console.log(table.toString());
        rl.question('Masukkan NIM mahasiswa : ', nim => {
            answer(nim);
            line();
        });
    });
};