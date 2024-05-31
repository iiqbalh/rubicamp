import Mahasiswa from '../models/Mahasiswa.js'
import Jurusan from '../models/Jurusan.js'
import { showMahasiswa, resultMahasiswa } from '../views/Mahasiswa/view.js'
import { showJurusan } from '../views/Jurusan/view.js'
import { rl } from '../models/connect.js'
import { line, home } from '../main2.js'



export class MahasiswaController {

    static firstMenu() {
        line()
        console.log(`
silahkan pilih opsi dibawah ini : 
[1] Daftar Mahasiswa
[2] Cari Mahasiswa
[3] Tambah Mahasiswa
[4] Hapus Mahasiswa
[5] Kembali
        `)
        line()

        rl.question('masukan salah satu no. dari opsi diatas : ', (answer) => {
            switch (answer) {
                case '1':
                    MahasiswaController.daftar()
                    break;

                case '2':
                    MahasiswaController.cari()
                    break;

                case '3':
                    MahasiswaController.tambah()
                    break;

                case '4':
                    MahasiswaController.hapus()
                    break;

                case '5':
                    home()
                    break;

                default:
                    console.log('opsi yang anda pilih tidak tersedia')
                    MahasiswaController.menu()
                    break;
            }
        })
    }

    static daftar() {
        Mahasiswa.daftar(function (data) {
            showMahasiswa(data)
            MahasiswaController.firstMenu()
        })
    }

    static cari() {
        rl.question('Masukkan nim Mahasiswa : ', nim => {
            Mahasiswa.cari(nim, function (data) {
                if (!data) {
                    console.log(`Mahasiswa dengan NIM ${nim}, tidak terdaftar`);
                    MahasiswaController.firstMenu()
                } else {
                    resultMahasiswa(data)
                    MahasiswaController.firstMenu()
                }
            })
        })
    }

    static tambah() {
        console.log('lengkapi data di bawah ini :')
        Mahasiswa.daftar(function (dataMahasiswa) {
            if (!dataMahasiswa) {
                console.log('Terjadi kesalahan saat menampilkan data. Silahkan coba lagi');
                MahasiswaController.firstMenu()
            } else {
                showMahasiswa(dataMahasiswa)
                rl.question('NIM :', nim => {
                    Mahasiswa.cari(nim, function (dataMahasiswa) {
                        if (dataMahasiswa) {
                            console.log(`NIM ${dataMahasiswa.nim} telah terdaftar. Silahkan masukkan kembali data dengan benar`);
                            MahasiswaController.firstMenu()
                        } else {
                            rl.question('Nama :', nama => {
                                rl.question('Tanggal lahir :', umur => {
                                    rl.question('Alamat :', alamat => {
                                        Jurusan.daftar(function (dataJurusan) {
                                            showJurusan(dataJurusan)
                                            rl.question('ID jurusan :', idJurusan => {

                                                Mahasiswa.tambah(nim, idJurusan, nama, umur, alamat)
                                                console.log('Mahasiswa telah ditambahkan')
                                                Mahasiswa.daftar(function (data) {
                                                    showMahasiswa(data)
                                                    MahasiswaController.firstMenu()
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    })
                })
            }
        })
    }

    static hapus() {
        rl.question('Masukan NIM Mahasiswa : ', nim => {
            Mahasiswa.cari(nim, function (data) {
                if (data) {
                    Mahasiswa.hapus(data.nim)
                    console.log(`Data mahasiswa dengan NIM ${nim}, telah dihapus`)
                    MahasiswaController.firstMenu()
                } else {
                    console.log(`Mahasiswa dengan nim ${nim}, tidak terdaftar`);
                    
                    MahasiswaController.firstMenu()
                }
            })
        })
    }
}    