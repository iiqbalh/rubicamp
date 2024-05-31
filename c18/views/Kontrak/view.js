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





export function showKontrak(data = []) {
    let table = new Table({
        head: ['id', 'nim', 'id_dosen', 'id_matakuliah', 'nilai']
        , colWidths: [10, 15, 10, 10, 12]
    });

    data.forEach(data => {
        table.push([data.id, data.nim, data.id_dosen, data.id_matakuliah, data.nilai])    
    });
    console.log(table.toString())
};





