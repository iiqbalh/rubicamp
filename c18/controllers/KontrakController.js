import { rl } from '../models/connect.js'
import { line, home } from '../main2.js'
import Kontrak from '../models/Kontrak.js'
import Matakuliah from '../models/Matakuliah.js'
import Dosen from '../models/Dosen.js'
import { showKontrak, showKontrak2, showKontrak3, showKontrak4, showKontrak5 } from '../views/Kontrak/view.js'
import { showMatakuliah } from '../views/Matakuliah/view.js'
import { showDosen } from '../views/Dosen/view.js'





export class KontrakController {

    static firstMenu() {
        line()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
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
                    KontrakController.update()
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
        Kontrak.daftar2(function (dataKontrak) {
            showKontrak2(dataKontrak)
            rl.question('Masukkan NIM Mahasiswa : ', nim => {
                Kontrak.cari(nim, function (dataKontrak) {
                    if (!dataKontrak) {
                        console.log(`Mahasiswa dengan NIM ${nim}, tidak terdaftar`);
                        KontrakController.firstMenu()
                    } else {
                        console.log(`Daftar kontrak mahasiswa dengan NIM ${nim} adalah: `)
                        showKontrak5([dataKontrak])
                        KontrakController.firstMenu()
                    }
                })
            })
        })
    }

    static tambah() {
        console.log('lengkapi data di bawah ini :')
        Kontrak.daftar2(function (dataKontrak) {
            if (!dataKontrak) {
                console.log('Terjadi kesalahan saat menampilkan data. Silahkan coba lagi');
                KontrakController.firstMenu()
            } else {
                showKontrak2(dataKontrak)
                rl.question('Masukan NIM :', nim => {
                    Matakuliah.daftar(function (data) {
                        showMatakuliah(data)
                        rl.question('Masukan ID Matakuliah :', id => {
                            Dosen.daftar(function (data) {
                                showDosen(data)
                                rl.question('Masukan ID Dosen :', idD => {
                                    Kontrak.tambah(nim, id, idD)
                                    console.log('Kontrak telah ditambahkan')
                                    KontrakController.daftar()
                                })
                            })
                        })
                    })
                })
            }
        })
    }

    static hapus() {
        rl.question('Masukan ID kontrak : ', id => {
            Kontrak.cariID(id, function (data) {
                if (data) {
                    Kontrak.hapus(data.id)
                    console.log(`Data Kontrak dengan ID ${id}, telah dihapus`)
                    KontrakController.firstMenu()
                } else {
                    console.log(`Kontrak dengan ID ${id}, tidak terdaftar`);
                    KontrakController.firstMenu()
                }
            })
        })
    }

    static update() {
        Kontrak.daftar3(function (data) {
            showKontrak3(data)
            rl.question('Masukan NIM Mahasiswa :', nim => {
                console.log(`Detail mahasiswa dengan NIM '${nim}' : `)
                Kontrak.daftar4(nim, function(data) {
                    showKontrak4(data)
                    rl.question('Masukan ID yang akan dirubah nilainya :', id => {
                        rl.question('Tulis nilai yang baru :', nilai => {
                            Kontrak.update(nilai, id)
                            console.log('Nilai telah diupdate')
                            Kontrak.daftar3(function (data) {
                                showKontrak3(data)
                                KontrakController.firstMenu()
                            })
                        })
                    })
                })
            })
        })
    }
}    