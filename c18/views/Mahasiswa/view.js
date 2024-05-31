import Table from 'cli-table'
import { line } from '../../main2.js'






export function option() {
    line()
    console.log(`
silahkan pilih opsi di bawah ini :
[1] Daftar Mahasiswa
[2] Cari Mahasiswa
[3] Tambah Mahasiswa
[4] Hapus Mahasiswa
[5] Kembali
`)
    line()
}





export function showMahasiswa(data = []) {
    const table = new Table({
        head: ['nim', 'id_jurusan', 'nama_mahasiswa', 'tanggal lahir', 'alamat']
        , colWidths: [10, 20, 20, 30, 20]
    });

    data.forEach(data => {
        table.push([data.nim, data.id_jurusan, data.nama_mahasiswa, data.tanggalLahir, data.alamat])
    });
    console.log(table.toString());
}





export function resultMahasiswa(data) {
    line()
console.log(`Detail mahasiswa dengan NIM '${data.nim}' :
NIM     : ${data.nim}
Nama    : ${data.nama_mahasiswa}
Alamat  : ${data.alamat}
jurusan : ${data.id_jurusan}
`);
}