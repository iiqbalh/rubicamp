CREATE TABLE dosen (
    id_dosen CHAR(2) PRIMARY KEY NOT NULL,
    nama_dosen VARCHAR(50) NOT NULL
);
INSERT INTO dosen VALUES
("01", "abdul"),
("02", "malik"),
("03", "siti");


CREATE TABLE jurusan (
    id_jurusan CHAR(2) PRIMARY KEY NOT NULL,
    jurusan VARCHAR(50) NOT NULL
);
INSERT INTO jurusan VALUES
("01", "kedokteran"),
("02", "teknik komputer"),
("03", "teknik informatika");


CREATE TABLE mahasiswa (
    nim CHAR(4) PRIMARY KEY NOT NULL,
    id_jurusan CHAR(2) NOT NULL,
    nama_mahasiswa VARCHAR(50) NOT NULL,
    umur INTEGER NOT NULL,
    alamat TEXT NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
);
INSERT INTO mahasiswa VALUES
("0001", "03", "iqbal", "19", "bandung"),
("0002", "02", "fauzi", "24", "jakarta"),
("0003", "03", "yuri", "27", "ciamis"),
("0004", "03", "cika", "19", "garut"),
("0005", "01", "ayu", "22", "bandung");


CREATE TABLE matakuliah (
    id_matakuliah CHAR(3) PRIMARY KEY NOT NULL,
    matakuliah VARCHAR(50) NOT NULL,
    sks INTEGER NOT NULL
);
INSERT INTO matakuliah VALUES
("111","aljabar linear, data mining", "9"),
("222","algoritma dan pemrograman, data mining", "20"),
("333","biologi kedokteran", "24");


CREATE TABLE kontrak (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(4) NOT NULL,
    id_dosen CHAR(2) NOT NULL,
    id_matakuliah CHAR(3) NOT NULL,
    nilai VARCHAR(5) NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(id_dosen) REFERENCES dosen(id_dosen),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);
INSERT INTO mengikuti (nim, id_matakuliah, nilai) VALUES
("0001", "222", "B"),
("0002", "111", "E"),
("0003", "222", "B"),
("0004", "222", "D"),
("0005", "333", "A");
