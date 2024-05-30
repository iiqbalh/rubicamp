


// function line() {
//     console.log('=============================================================================================================================================')
// }

// function welcome() {
//     line()
//     console.log('Welcome to Univesitas Pendidikan Indonesia');
//     console.log('Jl.Setiabudhi No.255');
//     line()
//     username()
// }

// welcome()

// function username() {
//     rl.question('username: ', answer => {

//         db.get("select * from users where userName = ?", [answer], (err, user) => {
//             if (err) return console.log("please contact administrator", err);

//             if (!user) {
//                 console.log("username is not found");
//                 username()
//             } else {
//                 password(user)
//             }

//         })
//     });
// }

// function password(user) {
//     rl.question('password: ', answer => {
//         if (answer === user.password.toString()) {
//             line()
//             console.log(`welcome, ${user.userName}. Your access level is : ${user.role.toUpperCase()}`);

//             fisrtMenu()
//         } else {
//             console.log("password is not found");
//             password(user)
//         }
//     });
// }

// // FITUR DAFTAR !!!!!!!!!!

// function daftarMahasiswa() {
//     const table = new Table({
//         head: ['nim', 'id_jurusan', 'nama_mahasiswa', 'umur', 'alamat']
//         , colWidths: [10, 20, 20, 30, 20]
//     });

//     db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.nim, data.id_jurusan, data.nama_mahasiswa, data.tanggalLahir, data.alamat])
//         });
//         console.log(table.toString());

//         opsiMahasiswa()
//     })
// }

// function daftarJurusan() {
//     const table = new Table({
//         head: ['id_jurusan', 'jurusan']
//         , colWidths: [20, 20]
//     });

//     db.all("select * from jurusan", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_jurusan, data.jurusan])
//         });
//         console.log(table.toString());

//         opsiJurusan()
//     })
// }

// function daftarDosen() {
//     const table = new Table({
//         head: ['id_dosen', 'nama_dosen']
//         , colWidths: [20, 20]
//     });

//     db.all("select * from dosen", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_dosen, data.nama_dosen])
//         });
//         console.log(table.toString());

//         opsiDosen()
//     })
// }

// function daftarMatakuliah() {
//     const table = new Table({
//         head: ['id_matakuliah', 'matakuliah', 'sks']
//         , colWidths: [20, 50, 10]
//     });

//     db.all("select * from matakuliah", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_matakuliah, data.matakuliah, data.sks])
//         });
//         console.log(table.toString());

//         opsiMatakuliah()
//     })
// }

// function daftarKontrak() {
//     const table = new Table({
//         head: ['id', 'nim', 'nama_mahasiswa', 'matakuliah', 'nama_dosen', 'nilai']
//         , colWidths: [10, 10, 20, 40, 10, 10]
//     });

//     db.all("select * from kontrak left join mahasiswa using(nim) left join matakuliah using(id_matakuliah) left join dosen using(id_dosen)", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : " "])
//         });
//         console.log(table.toString());

//         opsiKontrak()
//     })
// }

// // FITUR CARI !!!!!!!!!!

// function cariMahasiswa() {
//     rl.question('Masukan NIM Mahasiswa: ', answer => {

//         db.get("select * from mahasiswa where nim = ?", [answer], (err, data) => {
//             if (err) return console.log("please contact administrator", err);

//             if (!data) {
//                 console.log(`Mahasiswa dengan NIM ${answer}, tidak terdaftar`);

//                 opsiMahasiswa()
//             } else {
//                 line()
//                 console.log(`Detail mahasiswa dengan NIM '${answer}' :`)
//                 console.log(`NIM     : ${data.nim}`)
//                 console.log(`Nama    : ${data.nama_mahasiswa}`)
//                 console.log(`Alamat  : ${data.alamat}`)
//                 console.log(`jurusan : ${data.id_jurusan}`)

//                 opsiMahasiswa()
//             }
//         });
//     });
// }

// function cariJurusan() {
//     rl.question('Masukan ID Jurusan: ', answer => {

//         db.get("select * from jurusan where id_jurusan = ?", [answer], (err, data) => {
//             if (err) return console.log("please contact administrator", err);

//             if (!data) {
//                 console.log(`Jurusan dengan ID ${answer}, tidak terdaftar`);

//                 opsiJurusan()
//             } else {
//                 line()
//                 console.log(`Detail Jurusan dengan ID '${answer}' :`)
//                 console.log(`ID Jurusan   : ${data.id_jurusan}`)
//                 console.log(`Nama Jurusan : ${data.jurusan}`)

//                 opsiJurusan()
//             }
//         });
//     });
// }

// function cariDosen() {
//     rl.question('Masukan ID Dosen: ', answer => {

//         db.get("select * from dosen where id_dosen = ?", [answer], (err, data) => {
//             if (err) return console.log("please contact administrator", err);

//             if (!data) {
//                 console.log(`Dosen dengan ID ${answer}, tidak terdaftar`);

//                 opsiDosen()
//             } else {
//                 line()
//                 console.log(`Detail Dosen dengan ID '${answer}' :`)
//                 console.log(`ID Dosen   : ${data.id_dosen}`)
//                 console.log(`Nama Dosen : ${data.nama_dosen}`)

//                 opsiDosen()
//             }
//         });
//     });
// }

// function cariMatakuliah() {
//     rl.question('Masukan ID Matakuliah: ', answer => {

//         db.get("select * from matakuliah where id_matakuliah = ?", [answer], (err, data) => {
//             if (err) return console.log("please contact administrator", err);

//             if (!data) {
//                 console.log(`Marakuliah dengan ID ${answer}, tidak terdaftar`);

//                 opsiMatakuliah()
//             } else {
//                 line()
//                 console.log(`Detail Matakuliah dengan ID '${answer}' :`)
//                 console.log(`ID Matakuliah   : ${data.id_matakuliah}`)
//                 console.log(`Matakuliah      : ${data.matakuliah}`)

//                 opsiMatakuliah()
//             }
//         });
//     });
// }

// function cariKontrak() {
//     daftarCariKontrak(function (nim) {
//         const table = new Table({
//             head: ['id', 'nim', 'id_matakuliah', 'id_dosen', 'nilai']
//             , colWidths: [10, 20, 10, 10, 10]
//         });

//         db.all("select * from kontrak where nim = ?", [nim], (err, data) => {
//             if (err) return console.log("please contact administrator", err);

//             if (!data) {
//                 console.log(`Mahasiswa dengan NIM ${nim}, tidak terdaftar`);

//                 opsiKontrak()
//             } else {
//                 data.forEach(data => {
//                     table.push([data.id, data.nim, data.id_matakuliah, data.id_dosen, data.nilai ? data.nilai : " "])
//                 });
//                 console.log(`Daftar kontrak mahasiswa dengan NIM ${nim} adalah: `)
//                 console.log(table.toString());

//                 opsiKontrak()
//             }
//         });
//     })
// }

// function daftarCariKontrak(callback) {
//     const table = new Table({
//         head: ['nim', 'nama mahasiswa', 'tanggal lahir', 'alamat', 'ID jurusan', 'jurusan']
//         , colWidths: [10, 20, 20, 20, 10, 20]
//     });

//     db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
//         if (err) return console.log("please contact administrator", err);
//         //console.log(data)

//         data.forEach(data => {
//             table.push([data.nim, data.nama_mahasiswa, data.tanggalLahir, data.alamat, data.id_jurusan, data.jurusan])
//         });
//         console.log(table.toString());
//         rl.question('Masukan NIM mahasiswa :', nim => {
//             callback(nim)
//         })
//     })
// }


// // FITUR TAMBAH !!!!!!!!!!!!

// // MAHASISWA

// function tambahMahasiswa() {
//     console.log('Lengkapi data di bawah ini :')
//     const table = new Table({
//         head: ['nim', 'id_jurusan', 'nama_mahasiswa', 'umur', 'alamat']
//         , colWidths: [10, 20, 20, 30, 20]
//     });

//     db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.nim, data.id_jurusan, data.nama_mahasiswa, data.tanggalLahir, data.alamat])
//         });
//         console.log(table.toString());
//         questTambahMahasiswa()
//     })
// }

// function questTambahMahasiswa() {
//     rl.question('NIM :', nim => {
//         rl.question('Nama :', nama => {
//             rl.question('Tanggal lahir :', umur => {
//                 rl.question('Alamat :', alamat => {
//                     mahasiswaTambahJurusan(function (idJurusan) {
//                         db.run("INSERT INTO mahasiswa (nim, nama_mahasiswa, tanggalLahir, alamat, id_jurusan) VALUES (?, ?, ?, ?, ?)", [nim, nama, umur, alamat, idJurusan], (err) => {
//                             if (err) return console.log(err)
//                             console.log('Mahasiswa telah ditambahkan');
//                             daftarMahasiswa()
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }

// function mahasiswaTambahJurusan(callback) {
//     const table = new Table({
//         head: ['id_jurusan', 'jurusan']
//         , colWidths: [20, 20]
//     });

//     db.all("select * from jurusan", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_jurusan, data.jurusan])
//         });
//         console.log(table.toString());
//         rl.question('ID jurusan :', idJurusan => {
//             callback(idJurusan)
//         })
//     })
// }

// //JURUSAN

// function tambahJurusan() {
//     console.log('Lengkapi data di bawah ini :')
//     const table = new Table({
//         head: ['id_jurusan', 'jurusan']
//         , colWidths: [20, 20]
//     });

//     db.all("select * from jurusan", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_jurusan, data.jurusan])
//         });
//         console.log(table.toString());
//         questTambahJurusan()
//     })
// }

// function questTambahJurusan() {
//     rl.question('ID jurusan :', idJurusan => {
//         rl.question('Nama jurusan :', namaJurusan => {
//             db.run("INSERT INTO jurusan (id_jurusan, jurusan) VALUES (?, ?)", [idJurusan, namaJurusan], (err) => {
//                 console.log('Jurusan telah ditambahkan')
//                 daftarJurusan()
//             })
//         })
//     })
// }

// //DOSEN

// function tambahDosen() {
//     console.log('Lengkapi data di bawah ini :')
//     const table = new Table({
//         head: ['id_dosen', 'nama_dosen']
//         , colWidths: [20, 20]
//     });

//     db.all("select * from dosen", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_dosen, data.nama_dosen])
//         });
//         console.log(table.toString());
//         questTambahDosen()
//     })
// }

// function questTambahDosen() {
//     rl.question('ID dosen :', idDosen => {
//         rl.question('Nama dosen :', namaDosen => {
//             db.run("INSERT INTO dosen (id_dosen, nama_dosen) VALUES (?, ?)", [idDosen, namaDosen], (err) => {
//                 console.log('Dosen telah ditambahkan')
//                 daftarDosen()
//             })
//         })
//     })
// }

// //MATAKULIAH

// function tambahMatakuliah() {
//     console.log('Lengkapi data di bawah ini :')
//     const table = new Table({
//         head: ['id_matakuliah', 'matakuliah', 'sks']
//         , colWidths: [20, 20, 10]
//     });

//     db.all("select * from matakuliah", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_matakuliah, data.matakuliah, data.sks])
//         });
//         console.log(table.toString());
//         questTambahMatakuliah()
//     })
// }

// function questTambahMatakuliah() {
//     rl.question('ID matakuliah :', idMatkul => {
//         rl.question('Nama matakuliah :', namaMatkul => {
//             rl.question('SKS :', sks => {
//                 db.run("INSERT INTO matakuliah (id_matakuliah, matakuliah, sks) VALUES (?, ?, ?)", [idMatkul, namaMatkul, sks], (err) => {
//                     console.log('Matakuliah telah ditambahkan')
//                     daftarMatakuliah()
//                 })
//             })
//         })
//     })
// }

// // KONTRAK !!!!!!

// function tambahKontrak() {
//     daftarTambahKontrak(function (nim) {
//         daftarTambahMatkul(function (matkul) {
//             daftarTambahDosen(function (dosen) {
//                 db.run("INSERT INTO kontrak (nim, id_matakuliah, id_dosen) VALUES (?, ?, ?)", [nim, matkul, dosen], (err) => {
//                     if (err) return console.log("please contact administrator", err);
//                     console.log('Kontrak telah ditambahkan')
//                     daftarHasil()
//                 })
//             })
//         })
//     })
// }

// function daftarHasil() {
//     const table = new Table({
//         head: ['id', 'nim', 'nama_mahasiswa', 'matakuliah', 'nama_dosen', 'nilai']
//         , colWidths: [10, 20, 30, 30, 30, 10]
//     });

//     db.all("select * from kontrak left join mahasiswa using(nim) left join matakuliah using(id_matakuliah) left join dosen using(id_dosen)", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : " "])
//         });
//         console.log(table.toString());
//         opsiKontrak()
//     })
// }

// function daftarTambahDosen(callback) {
//     const table = new Table({
//         head: ['id_dosen', 'nama_dosen']
//         , colWidths: [20, 20]
//     });

//     db.all("select * from dosen", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_dosen, data.nama_dosen])
//         });
//         console.log(table.toString());
//         rl.question('Masukan ID Dosen :', dosen => {
//             callback(dosen)
//         })
//     })
// }

// function daftarTambahMatkul(callback) {
//     const table = new Table({
//         head: ['id_matakuliah', 'nama_matakuliah', 'sks']
//         , colWidths: [20, 40, 10]
//     });

//     db.all("select * from matakuliah", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id_matakuliah, data.matakuliah, data.sks])
//         });
//         console.log(table.toString());
//         rl.question('Masukan ID matakuliah :', matkul => {
//             callback(matkul)
//         })
//     })
// }

// function daftarTambahKontrak(callback) {
//     console.log('Lengkapi data di bawah ini :')
//     const table = new Table({
//         head: ['nim', 'nama', 'tanggal lahir', 'alamat', 'id jurusan', 'jurusan']
//         , colWidths: [10, 20, 20, 10, 10, 20]
//     });

//     db.all("select * from mahasiswa left join jurusan using(id_jurusan)", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.nim, data.nama_mahasiswa, data.tanggalLahir, data.alamat, data.id_jurusan, data.jurusan])
//         });
//         console.log(table.toString());
//         rl.question('Masukan NIM :', nim => {
//             callback(nim)
//         })
//     })
// }

// // FITUR HAPUS !!!!!!!!!!

// function hapusMahasiswa() {
//     rl.question('Masukan NIM Mahasiswa : ', answer => {
//         db.run("delete from mahasiswa where nim = ?", [answer], (err) => {
//             console.log(`Data mahasiswa dengan NIM ${answer}, telah dihapus`)
//             line()
//             opsiMahasiswa()
//         })
//     })
// }

// function hapusJurusan() {
//     rl.question('Masukan ID jurusan : ', answer => {
//         db.run("delete from jurusan where id_jurusan = ?", [answer], (err) => {
//             console.log(`Data jurusan dengan ID ${answer}, telah dihapus`)
//             line()
//             opsiJurusan()
//         })
//     })
// }

// function hapusDosen() {
//     rl.question('Masukan ID dosen : ', answer => {
//         db.run("delete from dosen where id_dosen = ?", [answer], (err) => {
//             console.log(`Data dosen dengan ID ${answer}, telah dihapus`)
//             line()
//             opsiDosen()
//         })
//     })
// }

// function hapusMatakuliah() {
//     rl.question('Masukan ID matakuliah : ', answer => {
//         db.run("delete from matakuliah where id_matakuliah = ?", [answer], (err) => {
//             console.log(`Data matakuliah dengan ID ${answer}, telah dihapus`)
//             line()
//             opsiMatakuliah()
//         })
//     })
// }

// function hapusKontrak() {
//     rl.question('Masukan ID Kontrak : ', answer => {
//         db.run("delete from kontrak where id = ?", [answer], (err) => {
//             if (err) return console.log("please contact administrator", err);

//             console.log(`Data kontrak dengan ID ${answer}, telah dihapus`)
//             line()
//             opsiKontrak()
//         })
//     })
// }

// // UPDATE NILAI !!!!!!!

// function updateNilaiKontrak() {
//     daftarUpdateKontrak(function (nim) {
//         line()
//         console.log(`Detail mahasiswa dengan NIM '${nim}' : `)
//         const table = new Table({
//             head: ['id', 'matakuliah', 'nilai']
//             , colWidths: [10, 40, 10]
//         });

//         db.all("select * from kontrak left join matakuliah using(id_matakuliah) where nim = ?", [nim], (err, data) => {
//             if (err) return console.log(err)

//             data.forEach(data => {
//                 table.push([data.id, data.matakuliah, data.nilai ? data.nilai : " "])
//             });
//             console.log(table.toString()); 
//             rl.question('Masukan ID yang akan dirubah nilainya :', id => {
//                 line()
//                 rl.question('Tulis nilai yang baru :', nilai => {
//                     db.run("update kontrak set nilai = ? where id = ?", [nilai, id], (err) => {
//                         if (err) return console.log("please contact administrator", err);
            
//                         line()
//                         console.log(`Nilai telah diupdate`)
//                         daftarUpdateKontrak2()
//                     })
//                 })
//             })
//         })
//     })
// }

// function daftarUpdateKontrak2() {
//     const table = new Table({
//         head: ['id', 'nim', 'nama', 'mata kuliah', 'dosen', 'nilai']
//         , colWidths: [10, 20, 20, 40, 10, 10]
//     });

//     db.all("select * from kontrak left join mahasiswa using(nim) left join matakuliah using(id_matakuliah) left join dosen using(id_dosen) ", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : " "])
//         });
//         console.log(table.toString());
//         opsiKontrak()
//     })
// }

// function daftarUpdateKontrak(callback) {
//     const table = new Table({
//         head: ['id', 'nim', 'nama', 'mata kuliah', 'dosen', 'nilai']
//         , colWidths: [10, 20, 20, 40, 10, 10]
//     });

//     db.all("select * from kontrak left join mahasiswa using(nim) left join matakuliah using(id_matakuliah) left join dosen using(id_dosen) ", (err, data) => {
//         if (err) return console.log("please contact administrator", err);

//         data.forEach(data => {
//             table.push([data.id, data.nim, data.nama_mahasiswa, data.matakuliah, data.nama_dosen, data.nilai ? data.nilai : " "])
//         });
//         console.log(table.toString());
//         rl.question('Masukan NIM mahasiswa :', nim => {
//             callback(nim)
//         })
//     })
// }

// // MENU !!!!!!!

// function fisrtMenu() {
//     line()
//     console.log(`silahkan pilih opsi di bawah ini :
// [1] Mahasiswa 
// [2] Jurusan
// [3] Dosen
// [4] Mata Kuliah
// [5] Kontrak
// [6] Keluar
//     `);

//     line()

//     rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

//         switch (index) {
//             case "1":
//                 opsiMahasiswa()
//                 break;
//             case "2":
//                 opsiJurusan()
//                 break;
//             case "3":
//                 opsiDosen()
//                 break;
//             case "4":
//                 opsiMatakuliah()
//                 break;
//             case "5":
//                 opsiKontrak()
//                 break;
//             case "6":
//                 welcome()
//                 break;
//             default:
//                 console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
//                 line()
//                 fisrtMenu()
//                 break;
//         }
//     });
// }


// function opsiMahasiswa() {
//     line()
//     console.log(`Silahkan pilih opsi di bawah ini :
// [1] Daftar Mahasiswa 
// [2] Cari Mahasiswa
// [3] Tambah Mahaiswa
// [4] Hapus mahasiswa
// [5] Kembali
//     `);

//     line()

//     rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

//         switch (index) {
//             case "1":
//                 daftarMahasiswa()
//                 break;
//             case "2":
//                 cariMahasiswa()
//                 break;
//             case "3":
//                 tambahMahasiswa()
//                 break;
//             case "4":
//                 hapusMahasiswa()
//                 break;
//             case "5":
//                 fisrtMenu()
//                 break;
//             default:
//                 console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
//                 line()
//                 opsiMahasiswa()
//                 break;
//         }
//     });
// }

// function opsiJurusan() {
//     line()
//     console.log(`Silahkan pilih opsi di bawah ini :
// [1] Daftar Jurusan 
// [2] Cari Jurusan
// [3] Tambah Jurusan
// [4] Hapus Jurusan
// [5] Kembali
//     `);

//     line()

//     rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

//         switch (index) {
//             case "1":
//                 daftarJurusan()
//                 break;
//             case "2":
//                 cariJurusan()
//                 break;
//             case "3":
//                 tambahJurusan()
//                 break;
//             case "4":
//                 hapusJurusan()
//                 break;
//             case "5":
//                 fisrtMenu()
//                 break;
//             default:
//                 console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
//                 line()
//                 opsiJurusan()
//                 break;
//         }
//     });
// }

// function opsiDosen() {
//     line()
//     console.log(`Silahkan pilih opsi di bawah ini :
// [1] Daftar Dosen 
// [2] Cari Dosen
// [3] Tambah Dosen
// [4] Hapus Dosen
// [5] Kembali
//     `);

//     line()

//     rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

//         switch (index) {
//             case "1":
//                 daftarDosen()
//                 break;
//             case "2":
//                 cariDosen()
//                 break;
//             case "3":
//                 tambahDosen()
//                 break;
//             case "4":
//                 hapusDosen()
//                 break;
//             case "5":
//                 fisrtMenu()
//                 break;
//             default:
//                 console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
//                 line()
//                 opsiDosen()
//                 break;
//         }
//     });
// }

// function opsiMatakuliah() {
//     line()
//     console.log(`Silahkan pilih opsi di bawah ini :
// [1] Daftar Matakuliah 
// [2] Cari Matakuliah
// [3] Tambah Matakuliah
// [4] Hapus Matakuliah
// [5] Kembali
//     `);

//     line()

//     rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

//         switch (index) {
//             case "1":
//                 daftarMatakuliah()
//                 break;
//             case "2":
//                 cariMatakuliah()
//                 break;
//             case "3":
//                 tambahMatakuliah()
//                 break;
//             case "4":
//                 hapusMatakuliah()
//                 break;
//             case "5":
//                 fisrtMenu()
//                 break;
//             default:
//                 console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
//                 line()
//                 opsiMatakuliah()
//                 break;
//         }
//     });
// }

// function opsiKontrak() {
//     line()
//     console.log(`Silahkan pilih opsi di bawah ini :
// [1] Daftar Kontrak 
// [2] Cari Kontrak
// [3] Tambah Kontrak
// [4] Hapus Kontrak
// [5] Update Nilai
// [6] kembali 
//     `);

//     line()

//     rl.question("Masukan salah satu nomor dari opsi di atas : ", index => {

//         switch (index) {
//             case "1":
//                 daftarKontrak()
//                 break;
//             case "2":
//                 cariKontrak()
//                 break;
//             case "3":
//                 tambahKontrak()
//                 break;
//             case "4":
//                 hapusKontrak()
//                 break;
//             case "5":
//                 updateNilaiKontrak()
//                 break;
//             case "6":
//                 fisrtMenu()
//                 break;
//             default:
//                 console.log(`Nomor yang anda masukan tidak sesuai dengan opsi di atas, silahkan coba lagi!`);
//                 line()
//                 opsiKontrak()
//                 break;
//         }
//     });
// }