import { rl } from './models/connect.js'
import { loginUser } from './controllers/UserController.js'
import { MahasiswaController } from './controllers/MahasiswaController.js'
import { JurusanController } from './controllers/JurusanController.js'
import { DosenController } from './controllers/DosenController.js'
import { MatakuliahController } from './controllers/MatakuliahController.js'
import { KontrakController } from './controllers/KontrakController.js'
 









export function line() {
    console.log('=========================================================================================================================')
}


export function start() {
    line()
    console.log("Welcome To Uneversitas Indonesia\nJl. Setiabudi No. 255")
    line()

    loginUser()
}


export function home() {
    line()
    console.log(`
silahkan pilih opsi dibawah ini
[1] Mahasiswa
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`)
    line()

    rl.question("Masukan salah satu nomor dari opsi diatas : ", (index) => {
        switch (index) {
            case '1':
                MahasiswaController.firstMenu()
                break;
            case '2':
                JurusanController.firstMenu()
                break;
            case '3':
                DosenController.firstMenu()
                break;
            case '4':
                MatakuliahController.firstMenu()
                break;
            case '5':
                KontrakController.firstMenu()
                break;
            case '6':
                line();
                console.log('Anda Telah Keluar');
                start();
                break;
            default:
                console.log("Nomor yang anda masukkan salah. Silahkan masukkan nomor dengan benar");
                home()
        };
    });
};

start()