-- task 1
SELECT * FROM mahasiswa JOIN jurusan USING(id_jurusan);

-- task 2
SELECT * from mahasiswa WHERE umur < 20;

-- task 3
SELECT nim, id_jurusan, nama_mahasiswa, umur, alamat, nilai 
FROM mahasiswa JOIN mengikuti USING(nim) WHERE nilai < 'B';

-- task 4
-- SELECT nim, nama_mahasiswa, SUM(sks) AS sks 
-- FROM mengikuti 
-- JOIN mahasiswa 
-- USING(nim) 
-- JOIN matakuliah 
-- USING(id_matakuliah) 
-- GROUP BY nim 
-- HAVING SKS > 10;

SELECT nim, id_jurusan, nama_mahasiswa, umur, alamat, sks 
FROM mengikuti JOIN mahasiswa USING(nim) JOIN matakuliah USING(id_matakuliah) WHERE sks > 10;

-- task 5
SELECT nim, id_jurusan, nama_mahasiswa, umur, alamat, matakuliah 
FROM mengikuti JOIN mahasiswa USING(nim) JOIN matakuliah USING(id_matakuliah) WHERE matakuliah LIKE '%data mining%';

-- task 6
SELECT id_dosen, nama_dosen, count(nim) as jumlah_mahasiswa 
FROM membimbing JOIN dosen USING(id_dosen) JOIN mahasiswa USING(nim) GROUP BY id_dosen;

-- task 7
SELECT * FROM mahasiswa ORDER BY umur;

-- task 8
-- SELECT nim, id_jurusan, jurusan, id_dosen, nama_dosen, id_matakuliah, matakuliah, sks, nama_mahasiswa, umur, alamat, nilai 
-- FROM mengikuti 
-- JOIN membimbing 
-- USING(nim) 
-- JOIN mahasiswa 
-- USING(nim) 
-- JOIN jurusan 
-- USING(id_jurusan) 
-- JOIN dosen 
-- USING(id_dosen) 
-- JOIN matakuliah 
-- USING(id_matakuliah) 
-- WHERE nilai = 'D' OR nilai = 'E';

SELECT * FROM mengikuti JOIN membimbing USING(nim) JOIN mahasiswa USING(nim) JOIN jurusan USING(id_jurusan) JOIN dosen USING(id_dosen) 
WHERE nilai = 'D' OR nilai = 'E';


-- ALTER TABLE MAHASISWA
-- ADD COLUMN umur INTEGER;

-- UPDATE mahasiswa 
-- SET umur = 24 
-- WHERE nim = '0002';

-- UPDATE mahasiswa
-- SET umur = 27
-- WHERE nim = '0003';

-- UPDATE mahasiswa
-- SET umur = 19
-- WHERE nim = '0004';

-- UPDATE mahasiswa 
-- SET umur = 22 
-- WHERE nim = '0005';

-- UPDATE matakuliah 
-- SET sks = '17' 
-- WHERE id_matakuliah = 222;

-- UPDATE matakuliah 
-- SET sks = '19' 
-- WHERE id_matakuliah = 333;

-- UPDATE matakuliah 
-- SET sks = '12' 
-- WHERE id_matakuliah = 444;

-- UPDATE matakuliah 
-- SET sks = '24' 
-- WHERE id_matakuliah = 555;

-- UPDATE matakuliah 
-- SET matakuliah = 'aljabar linear, data mining' 
-- WHERE id_matakuliah = 222;

-- UPDATE matakuliah 
-- SET matakuliah = 'algoritma dan pemograman, data mining' 
-- WHERE id_matakuliah = 333;

-- UPDATE matakuliah 
-- SET matakuliah = 'biologi kedokteran, data mining' 
-- WHERE id_matakuliah = 555;
