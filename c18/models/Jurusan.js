import { db } from './connect.js'



export default class Jurusan {
    constructor(id_jurusan, jurusan) {
        this.id_jurusan = id_jurusan
        this.jurusan = jurusan
    }

    static daftar(callback) {
        db.all("select * from  jurusan", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static cari(id, callback) {
        db.get("select * from jurusan where id_jurusan = ?", [id], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        });
    }

    simpan() {
        db.run("INSERT INTO jurusan (id_jurusan, jurusan) VALUES (?, ?)", [this.id_jurusan, this.jurusan],
            (err, data) => {
                if (err) console.log(err)
                else data
            })

    }

    static tambah(id_jurusan, jurusan) {
        const dataJurusan = new Jurusan(id_jurusan, jurusan);
        return dataJurusan.simpan()
    }

    static hapus(id) {
        db.run("DELETE FROM jurusan WHERE id_jurusan = ?", [id], (err, data) => {
            if (err) console.log(err)
            else data
        })
    }
}    