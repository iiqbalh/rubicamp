import Table from 'cli-table'
import { line } from '../../main2.js'





export function option() {
    line()
    console.log(`
silahkan pilih opsi di bawah ini
[1] Daftar Dosen
[2] Cari Dosen
[3] Tambah Dosen
[4] Hapus Dosen
[5] Kembali
`)
    line()
};





export function showDosen(data = []) {
    let table = new Table({
        head: ['id_Dosen', 'Dosen']
        , colWidths: [10, 20]
    });

    data.forEach(data => {
        table.push([data.id_dosen, data.nama_dosen])    
    });
    console.log(table.toString())
};





export function resultDosen(data) {
    line()
    console.log(`
Detail Jurusan dengan Kode '${data.id_dosen}' :
ID Jurusan   : ${data.id_dosen}
Nama Jurusan : ${data.nama_dosen}
    `)
};