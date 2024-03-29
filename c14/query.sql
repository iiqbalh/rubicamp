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
    jurusan VARCHAR(50) NOT NULL
);
INSERT INTO jurusan VALUES
("01","kedokteran"),
("02","farmasi"),
("03","psikologi"),
("04","teknik komputer"),
("05","teknik informatika");

CREATE TABLE mahasiswa (
    nim CHAR(4) PRIMARY KEY NOT NULL,
    id_jurusan CHAR(2) NOT NULL,
    nama_mahasiswa VARCHAR(50) NOT NULL,
    umur INTEGER NOT NULL,
    alamat TEXT NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
);
INSERT INTO mahasiswa VALUES
("0001", "05", "iqbal", "19", "bandung"),
("0002", "02", "fauzi", "24", "jakarta"),
("0003", "03", "yuri", "27", "ciamis"),
("0004", "01", "cika", "19", "garut"),
("0005", "04", "ayu", "22", "bandung");

CREATE TABLE  matakuliah (
    id_matakuliah CHAR(3) PRIMARY KEY NOT NULL,
    matakuliah VARCHAR(50) NOT NULL,
    sks INTEGER NOT NULL
);
INSERT INTO matakuliah VALUES
("111","analisis farmasi", "9"),
("222","aljabar linear, data mining", "19"),
("333","algoritma dan pemrograman, data mining", "20"),
("444","sosiologi", "8"),
("555","biologi kedokteran, data mining", "24");

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
    nim CHAR(3) NOT NULL,
    id_dosen CHAR(2) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(id_dosen) REFERENCES dosen(id_dosen)
);
INSERT INTO membimbing (nim, id_dosen) VALUES
("0002", "01"),
("0005", "02"),
("0001", "03"),
("0003", "04"),
("0004", "05");

CREATE TABLE mengikuti (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(4) NOT NULL,
    id_matakuliah CHAR(3) NOT NULL,
    nilai VARCHAR(5) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);
INSERT INTO mengikuti (nim, id_matakuliah, nilai) VALUES
("0001","333", "B"),
("0002","111", "E"),
("0003","444", "B"),
("0004","555", "D"),
("0005","222", "A");
