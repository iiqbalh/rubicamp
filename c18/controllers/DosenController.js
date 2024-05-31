import Dosen from '../models/Dosen.js'
import { showDosen, resultDosen } from '../views/Dosen/view.js'
import { rl } from '../models/connect.js'
import { line, home } from '../main2.js'



export class DosenController {

    static firstMenu() {
        line()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
        `)
        line()

        rl.question('masukan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    DosenController.daftar()
                    break;

                case '2':
                    DosenController.cari()
                    break;

                case '3':
                    DosenController.tambah()
                    break;

                case '4':
                    DosenController.hapus()
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
        Dosen.daftar(function (data) {
            showDosen(data)
            DosenController.firstMenu()
        })
    }

    static cari() {
        rl.question('Masukkan ID Dosen : ', id => {
            Dosen.cari(id, function (data) {
                if (!data) {
                    console.log(`Dosen dengan ID ${id}, tidak terdaftar`);
                    DosenController.firstMenu()
                } else {
                    resultDosen(data)
                    DosenController.firstMenu()
                }
            })
        })
    }

    static tambah() {
        console.log('lengkapi data di bawah ini :')
        Dosen.daftar(function (dataDosen) {
            if (!dataDosen) {
                console.log('Terjadi kesalahan saat menampilkan data. Silahkan coba lagi');
                DosenController.firstMenu()
            } else {
                showDosen(dataDosen)
                rl.question('ID Dosen :', id => {
                    rl.question('Nama Dosen :', nama => {
                        Dosen.tambah(id, nama)
                        console.log('Dosen telah ditambahkan ke database')
                        DosenController.firstMenu()
                    })
                })
            }
        })
    }

    static hapus() {
        rl.question('Masukan ID Dosen : ', id => {
            Dosen.cari(id, function (data) {
                if (data) {
                    Dosen.hapus(data.id_dosen)
                    console.log(`Data Jurusan dengan ID ${id}, telah dihapus`)
                    DosenController.firstMenu()
                } else {
                    console.log(`Dosen dengan ID ${id}, tidak terdaftar`);
                    
                    DosenController.firstMenu()
                }
            })
        })
    }
}    