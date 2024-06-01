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
        head: ['id', 'nim', 'id_matkul', 'id_dosen', 'nilai']
        , colWidths: [10, 10, 20, 20, 10]
    });

    data.forEach(data => {
        table.push([data.id, data.nim, data.id_matakuliah, data.id_dosen, data.nilai])
    });
    console.log(table.toString())
};





export function showKontrak2(data = []) {
    let table = new Table({
        head: ['nim', 'nama', 'tanggal lahir', 'alamat', 'id_jurusan', 'jurusan']
        , colWidths: [10, 10, 20, 20, 10, 20]
    });

    data.forEach(data => {
        table.push([data.nim, data.nama_mahasiswa, data.tanggalLahir, data.alamat, data.id_jurusan, data.jurusan])
    });
    console.log(table.toString())
};





export function showKontrak3(data = []) {
    const table = new Table({
        head: ['id', 'nim', 'nama', 'mata kuliah', 'dosen', 'nilai']
        , colWidths: [10, 20, 20, 40, 10, 10]
    });

    data.forEach(data => {
        table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : " "])
    });
    console.log(table.toString());
};




export function showKontrak4(data = []) {
    const table = new Table({
        head: ['id', 'matakuliah', 'nilai']
        , colWidths: [10, 40, 10]
    });

    data.forEach(data => {
        table.push([data.id, data.matakuliah, data.nilai ? data.nilai : " "])
    });
    console.log(table.toString());
};



export function showKontrak5(data) {
    let table = new Table({
        head: ['id', 'nim', 'id_matkul', 'id_dosen', 'nilai']
        , colWidths: [10, 10, 20, 20, 10]
    });

    data.forEach(data => {
        table.push([data.id, data.nim, data.id_matakuliah, data.id_dosen, data.nilai])
    });
    console.log(table.toString())
};
