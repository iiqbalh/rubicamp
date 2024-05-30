import { rl } from './models/connect.js'
import { loginUser } from './controllers/UserController.js'
import { MahasiswaController } from './controllers/MahasiswaController.js'
 










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

    rl.question("Masukkan salah satu nomor dari opsi diatas : ", (index) => {
        switch (index) {
            case '1':
                MahasiswaController.firstMenu()
                break;
            case '2':
                MahasiswaController.firstMenu()
                break;
            case '3':
                MahasiswaController.firstMenu()
                break;
            case '4':
                MahasiswaController.firstMenu()
                break;
            case '5':
                MahasiswaController.firstMenu()
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