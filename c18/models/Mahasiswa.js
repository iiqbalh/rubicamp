import { db } from './connect.js'



export default class Mahasiswa {
    constructor(nim, id_jurusan, nama_mahasiswa, tanggalLahir, alamat) {
        this.nim = nim
        this.id_jurusan = id_jurusan
        this.nama_mahasiswa = nama_mahasiswa
        this.tanggalLahir = tanggalLahir
        this.alamat = alamat
    }

    static daftar(callback) {
        db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        })
    }

    static cari(nim, callback) {
        db.get("select * from mahasiswa where nim = ?", [nim], (err, data) => {
            if (err) return console.log("please contact administrator", err);

            callback(data)
        });
    }

    simpan() {
        db.run("INSERT INTO mahasiswa (nim, id_jurusan, nama_mahasiswa, tanggalLahir, alamat) VALUES (?, ?, ?, ?, ?)", [this.nim, this.id_jurusan, this.nama_mahasiswa, this.tanggalLahir, this.alamat],
            (err, data) => {
                if (err) console.log(err)
                else data
            })

    }

    static tambah(nim, id_jurusan, nama_mahasiswa, tanggalLahir, alamat) {
        const mahasiswa = new Mahasiswa(nim, id_jurusan, nama_mahasiswa, tanggalLahir, alamat);
        return mahasiswa.simpan()
    }

    static hapus(nim) {
        db.run("DELETE FROM mahasiswa WHERE nim = ?", [nim], (err, data) => {
            if (err) console.log(err)
            else data
        })
    }
}    