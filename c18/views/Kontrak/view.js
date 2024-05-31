import Table from 'cli-table'
import { line } from '../../main2.js'





export function option() {
    line()
    console.log(`
silahkan pilih opsi di bawah ini
[1] Daftar Kontrak
[2] Cari Kontrak
[3] Tambah Kontrak
[4] Hapus Kontrak
[5] Kembali
`)
    line()
};





export function showMatakuliah(data = []) {
    let table = new Table({
        head: ['id_Matakuliah', 'Matakuliah', 'SKS']
        , colWidths: [10, 40, 10]
    });

    data.forEach(data => {
        table.push([data.id_matakuliah, data.matakuliah, data.sks])    
    });
    console.log(table.toString())
};





export function resultMatakuliah(data) {
    line()
    console.log(`
Detail Matakuliah dengan ID '${data.id_matakuliah}' :
ID Matakuliah : ${data.id_matakuliah}
Matakuliah    : ${data.matakuliah}
SKS           : ${data.sks}
    `)
};