CREATE TABLE dosen (
    id_dosen CHAR(2) PRIMARY KEY NOT NULL,
    nama_dosen VARCHAR(50) NOT NULL
);
INSERT INTO dosen VALUES
("01","abdul"),
("02","malik"),
("03","siti"),
("04","ahmad"),
("05","reni");

CREATE TABLE jurusan (
    id_jurusan CHAR(2) PRIMARY KEY NOT NULL,
    nama_jurusan VARCHAR(50) NOT NULL
);
INSERT INTO jurusan VALUES
("01","kedokteran"),
("02","farmasi"),
("03","psikologi"),
("04","teknik komputer"),
("05","teknik informatika");

CREATE TABLE mahasiswa (
    nim CHAR(4) PRIMARY KEY NOT NULL,
    nama_mahasiswa VARCHAR(50) NOT NULL,
    alamat TEXT NOT NULL,
    id_jurusan CHAR(2) NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
);
INSERT INTO mahasiswa VALUES
("0001","iqbal", "bandung", "05"),
("0002","fauzi", "jakarta", "02"),
("0003","yuri", "ciamis", "03"),
("0004","cika", "garut", "01"),
("0005","ayu", "bandung", "04");

CREATE TABLE  matakuliah (
    id_matakuliah CHAR(3) PRIMARY KEY NOT NULL,
    nama_matakuliah VARCHAR(50) NOT NULL,
    sks INTEGER NOT NULL
);
INSERT INTO matakuliah VALUES
("111","analisis farmasi", "2"),
("222","aljabar linear", "2"),
("333","algoritma dan pemrograman", "2"),
("444","sosiologi", "1"),
("555","biologi kedokteran", "2");

CREATE TABLE mengajar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_dosen CHAR(2) NOT NULL,
    id_matakuliah CHAR(3) NOT NULL,
    FOREIGN KEY(id_dosen) REFERENCES dosen(id_dosen),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);
INSERT INTO mengajar (id_dosen, id_matakuliah) VALUES
("01","111"),
("02","222"),
("03","333"),
("04","444"),
("05","555");

CREATE TABLE membimbing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_dosen CHAR(2) NOT NULL,
    nim CHAR(3) NOT NULL,
    FOREIGN KEY(id_dosen) REFERENCES dosen(id_dosen),
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim)
);
INSERT INTO membimbing (id_dosen, nim) VALUES
("01","0002"),
("02","0005"),
("03","0001"),
("04","0003"),
("05","0004");

CREATE TABLE mengikuti (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(4) NOT NULL,
    id_matakuliah CHAR(3) NOT NULL,
    nilai INTEGER DEFAULT 0,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);
INSERT INTO mengikuti (nim, id_matakuliah) VALUES
("0001","333"),
("0002","111"),
("0003","444"),
("0004","555"),
("0005","222");