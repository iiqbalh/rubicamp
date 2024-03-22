CREATE TABLE dosen (
    nama_dosen VARCHAR(50) PRIMARY KEY NOT NULL
);

CREATE TABLE  matakuliah (
    matakuliah VARCHAR(50) PRIMARY KEY NOT NULL,
    sks VARCHAR(100) NOT NULL,
    nama_dosen VARCHAR(50),
    FOREIGN KEY(nama_dosen) REFERENCES dosen(nama_dosen)
);

CREATE TABLE mahasiswa (
    nim CHAR(4) PRIMARY KEY NOT NULL,
    nama_mahasiswa VARCHAR(50) NOT NULL,
    jurusan VARCHAR(20) NOT NULL,
    alamat TEXT NOT NULL
);

CREATE TABLE jurasan (
    jurusan VARCHAR(50) PRIMARY KEY NOT NULL
);

CREATE TABLE mengajar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama_dosen VARCHAR(50) NOT NULL,
    matakuliah VARCHAR(50) NOT NULL,
    FOREIGN KEY(nama_dosen) REFERENCES dosen(nama_dosen),
    FOREIGN KEY(matakuliah) REFERENCES matakuliah(matakuliah)
);

CREATE TABLE membimbing (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama_dosen VARCHAR(50) NOT NULL,
    nim CHAR(3) NOT NULL,
    FOREIGN KEY(nama_dosen) REFERENCES dosen(nama_dosen),
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim)
);

CREATE TABLE mengikuti (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(4) NOT NULL,
    matakuliah VARCHAR(50) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(matakuliah) REFERENCES matakuliah(matakuliah)
);

CREATE TABLE memiliki (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(4) NOT NULL,
    jurusan VARCHAR(50) NOT NULL,
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(jurusan) REFERENCES jurusan(jurusan)
);