import { db } from './connect.js'


export default class Matakuliah {
    constructor(id_matakuliah, matakuliah, sks) {
        this.id_matakuliah = id_matakuliah
        this.matakuliah = matakuliah
        this.sks = sks
    }

    static daftar(callback) {
        db.all("select * from  matakuliah", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static cari(id, callback) {
        db.get("select * from matakuliah where id_matakuliah = ?", [id], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        });
    }

    simpan() {
        db.run("INSERT INTO matakuliah (id_matakuliah, matakuliah, sks) VALUES (?, ?, ?)", [this.id_matakuliah, this.matakuliah, this.sks],
            (err, data) => {
                if (err) console.log(err)
                else data
            })

    }

    static tambah(id_matakuliah, matakuliah, sks) {
        const dataMatakuliah = new Matakuliah(id_matakuliah, matakuliah, sks);
        return dataMatakuliah.simpan()
    }

    static hapus(id) {
        db.run("DELETE FROM matakuliah WHERE id_matakuliah = ?", [id], (err, data) => {
            if (err) console.log(err)
            else data
        })
    }
}    