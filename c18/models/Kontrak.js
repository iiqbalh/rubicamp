import { db } from './connect.js'



export default class Kontrak {
    constructor(nim , id_dosen, id_matakuliah, nilai) {
        this.nim = nim
        this.id_dosen = id_dosen
        this.id_matakuliah = id_matakuliah
        this.nilai = nilai
    }

    static daftar(callback) {
        db.all("select * from  kontrak", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static cari(nim, callback) {
        db.get("select * from kontrak where nim = ?", [nim], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        });
    }

    simpan() {
        db.run("INSERT INTO kontrak (nim, id_dosen, id_matakuliah, nilai) VALUES (?, ?, ?, ?)", [this.nim, this.id_dosen ,this.id_matakuliah, this.nilai],
            (err, data) => {
                if (err) console.log(err)
                else data
            })

    }

    static tambah(nim, id_dosen, id_matakuliah, nilai) {
        const dataKontrak = new Matakuliah(nim, id_dosen, id_matakuliah, nilai);
        return dataKontrak.simpan()
    }

    static hapus(nim) {
        db.run("DELETE FROM kontrak WHERE nim = ?", [nim], (err, data) => {
            if (err) console.log(err)
            else data
        })
    }
}    