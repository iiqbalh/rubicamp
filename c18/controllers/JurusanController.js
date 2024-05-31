import Jurusan from '../models/Jurusan.js'
import { showJurusan, resultJurusan } from '../views/Jurusan/view.js'
import { rl } from '../models/connect.js'
import { line, home } from '../main2.js'



export class JurusanController {

    static firstMenu() {
        line()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Jurusan
[2] Cari Jurusan
[3] Tambah Jurusan
[4] Hapus Jurusan
[5] Kembali
        `)
        line()

        rl.question('masukan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    JurusanController.daftar()
                    break;

                case '2':
                    JurusanController.cari()
                    break;

                case '3':
                    JurusanController.tambah()
                    break;

                case '4':
                    JurusanController.hapus()
                    break;

                case '5':
                    home()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    JurusanController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Jurusan.daftar(function (data) {
            showJurusan(data)
            JurusanController.firstMenu()
        })
    }

    static cari() {
        rl.question('Masukkan ID Jurusan : ', id => {
            Jurusan.cari(id, function (data) {
                if (!data) {
                    console.log(`Jurusan dengan ID ${id}, tidak terdaftar`);
                    JurusanController.firstMenu()
                } else {
                    resultJurusan(data)
                    JurusanController.firstMenu()
                }
            })
        })
    }

    static tambah() {
        console.log('lengkapi data di bawah ini :')
        Jurusan.daftar(function (dataJurusan) {
            if (!dataJurusan) {
                console.log('Terjadi kesalahan saat menampilkan data. Silahkan coba lagi');
                JurusanController.firstMenu()
            } else {
                showJurusan(dataJurusan)
                rl.question('ID Jurusan :', id => {
                    rl.question('Nama Jurusan :', nama => {
                        Jurusan.tambah(id, nama)
                        console.log('Jurusan telah ditambahkan ke database')
                        JurusanController.firstMenu()
                    })
                })
            }
        })
    }

    static hapus() {
        rl.question('Masukan ID Jurusan : ', id => {
            Jurusan.cari(id, function (data) {
                if (data) {
                    Jurusan.hapus(data.id_jurusan)
                    console.log(`Data Jurusan dengan ID ${id}, telah dihapus`)
                    JurusanController.firstMenu()
                } else {
                    console.log(`Jurusan dengan ID ${id}, tidak terdaftar`);
                    
                    JurusanController.firstMenu()
                }
            })
        })
    }
}    