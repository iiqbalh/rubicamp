import Matakuliah from '../models/Matakuliah.js'
import { showMatakuliah, resultMatakuliah } from '../views/Matakuliah/view.js'
import { rl } from '../models/connect.js'
import { line, home } from '../main2.js'



export class MatakuliahController {

    static firstMenu() {
        line()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Matakuliah
[2] Cari Matakuliah
[3] Tambah Matakuliah
[4] Hapus Matakuliah
[5] Kembali
        `)
        line()

        rl.question('masukan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    MatakuliahController.daftar()
                    break;

                case '2':
                    MatakuliahController.cari()
                    break;

                case '3':
                    MatakuliahController.tambah()
                    break;

                case '4':
                    MatakuliahController.hapus()
                    break;

                case '5':
                    home()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    DosenController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Matakuliah.daftar(function (data) {
            showMatakuliah(data)
            MatakuliahController.firstMenu()
        })
    }

    static cari() {
        rl.question('Masukkan ID Matakuliah : ', id => {
            Matakuliah.cari(id, function (data) {
                if (!data) {
                    console.log(`Matakuliah dengan ID ${id}, tidak terdaftar`);
                    MatakuliahController.firstMenu()
                } else {
                    resultMatakuliah(data)
                    MatakuliahController.firstMenu()
                }
            })
        })
    }

    static tambah() {
        console.log('lengkapi data di bawah ini :')
        Matakuliah.daftar(function (dataMatakuliah) {
            if (!dataMatakuliah) {
                console.log('Terjadi kesalahan saat menampilkan data. Silahkan coba lagi');
                MatakuliahController.firstMenu()
            } else {
                showMatakuliah(dataMatakuliah)
                rl.question('ID Matakuliah :', id => {
                    rl.question('Matakuliah :', matkul => {
                        rl.question('SKS :', sks => {
                            Matakuliah.tambah(id, matkul, sks)
                            console.log('Matakuliah telah ditambahkan ke database')
                            MatakuliahController.firstMenu()
                        })
                    })
                })
            }
        })
    }

    static hapus() {
        rl.question('Masukan ID Matakuliah : ', id => {
            Matakuliah.cari(id, function (data) {
                if (data) {
                    Matakuliah.hapus(data.id_matakuliah)
                    console.log(`Data Matakuliah dengan ID ${id}, telah dihapus`)
                    MatakuliahController.firstMenu()
                } else {
                    console.log(`Matakuliah dengan ID ${id}, tidak terdaftar`);
                    MatakuliahController.firstMenu()
                }
            })
        })
    }
}    