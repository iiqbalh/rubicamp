import Table from 'cli-table'
import { line } from '../../main2.js'





export function option() {
    line()
    console.log(`
silahkan pilih opsi di bawah ini
[1] Daftar Jurusan
[2] Cari Jurusan
[3] Tambah Jurusan
[4] Hapus Jurusan
[5] Kembali
`)
    line()
};





export function showJurusan(data = []) {
    let table = new Table({
        head: ['id_Jurusan', 'Jurusan']
        , colWidths: [10, 20]
    });

    data.forEach(data => {
        table.push([data.id_jurusan, data.jurusan])    
    });
    console.log(table.toString())
};





export function findJurusan(data) {
    line()
    console.log(`
Detail Jurusan dengan Kode '${data.id_jurusan}' :
ID Jurusan     : ${data.id_jurusan}
Nama Jurusan     : ${data.jurusan}
    `)
};