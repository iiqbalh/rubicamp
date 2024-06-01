import { db } from './connect.js'



export default class Kontrak {
    constructor(nim, id_matakuliah, id_dosen, nilai) {
        this.nim = nim
        this.id_dosen = id_dosen
        this.id_matakuliah = id_matakuliah
        this.nilai = nilai ? nilai : ' '
    }

    static daftar(callback) {
        db.all("select * from  kontrak", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static daftar2(callback) {
        db.all("select * from  mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static daftar3(callback) {
        db.all("select * from kontrak left join mahasiswa using(nim) left join matakuliah using(id_matakuliah) left join dosen using(id_dosen) ", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static daftar4(nim, callback) {
        db.all("select * from kontrak left join matakuliah using(id_matakuliah) where nim = ?", [nim], (err, data) => {
            if (err) return console.log(err)

            callback(data)
            console.log(data)
        })
    }

    static cari(nim, callback) {
        db.get("select * from kontrak where nim = ?", [nim], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
            console.log('ini', data)
        });
    }

    static cariID(nim, callback) {
        db.get("select * from kontrak where id = ?", [nim], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        });
    }

    simpan() {
        db.run("INSERT INTO kontrak (nim, id_matakuliah, id_dosen, nilai) VALUES (?, ?, ?, ?)", [this.nim, this.id_matakuliah, this.id_dosen, this.nilai],
            (err, data) => {
                if (err) console.log(err)
                else data
            })

    }

    static tambah(nim, id_matakuliah, id_dosen, nilai) {
        const dataKontrak = new Kontrak(nim, id_matakuliah, id_dosen, nilai);
        return dataKontrak.simpan()
    }

    static hapus(id) {
        db.run("DELETE FROM kontrak WHERE id = ?", [id], (err, data) => {
            if (err) console.log(err)
            else data
        })
    }

    static update(nilai, id) {
        db.run("update kontrak set nilai = ? where id = ?", [nilai, id], (err) => {
            if (err) return console.log("please contact administrator", err);
        })
    }
}  