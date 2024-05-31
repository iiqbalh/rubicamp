import { db } from './connect.js'


export default class Dosen {
    constructor(id_dosen, nama_dosen) {
        this.id_dosen = id_dosen
        this.nama_dosen = nama_dosen
    }

    static daftar(callback) {
        db.all("select * from  dosen", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static cari(id, callback) {
        db.get("select * from dosen where id_dosen = ?", [id], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        });
    }

    simpan() {
        db.run("INSERT INTO dosen (id_dosen, nama_dosen) VALUES (?, ?)", [this.id_dosen, this.nama_dosen],
            (err, data) => {
                if (err) console.log(err)
                else data
            })

    }

    static tambah(id_dosen, nama_dosen) {
        const dataDosen = new Dosen(id_dosen, nama_dosen);
        return dataDosen.simpan()
    }

    static hapus(id) {
        db.run("DELETE FROM dosen WHERE id_dosen = ?", [id], (err, data) => {
            if (err) console.log(err)
            else data
        })
    }
}    