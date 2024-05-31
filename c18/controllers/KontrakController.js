import Kontrak from '../models/Kontrak.js'
import { showKontrak } from '../views/Kontrak/view.js'
import { rl } from '../models/connect.js'
import { line, home } from '../main2.js'



export class KontrakController {

    static firstMenu() {
        line()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Matakuliah
[2] Cari Matakuliah
[3] Tambah Matakuliah
[4] Hapus Matakuliah
[5] Update Nilai
[6] Keluar
        `)
        line()

        rl.question('masukan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    KontrakController.daftar()
                    break;

                case '2':
                    KontrakController.cari()
                    break;

                case '3':
                    KontrakController.tambah()
                    break;

                case '4':
                    KontrakController.hapus()
                    break;

                case '5':
                    KontrakController.hapus()
                    break;

                case '6':
                    home()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    KontrakController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Kontrak.daftar(function (data) {
            showKontrak(data)
            KontrakController.firstMenu()
        })
    }

    static cari() {
        rl.question('Masukkan NIM Mahasiswa : ', nim => {
            Kontrak.cari(id, function (data) {
                if (!data) {
                    console.log(`Mahasiswa dengan NIM ${nim}, tidak terdaftar`);
                    KontrakController.firstMenu()
                } else {
                    resultMatakuliah(data)
                    KontrakController.firstMenu()
                }
            })
        })
    }

    static tambah() {
        console.log('lengkapi data di bawah ini :')
        Kontrak.daftar(function (dataKontrak) {
            if (!dataKontrak) {
                console.log('Terjadi kesalahan saat menampilkan data. Silahkan coba lagi');
                KontrakController.firstMenu()
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
        rl.question('Masukan NIM Mahasiswa : ', id => {
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